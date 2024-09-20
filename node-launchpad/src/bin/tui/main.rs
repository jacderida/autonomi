// Copyright 2024 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under The General Public License (GPL), version 3.
// Unless required by applicable law or agreed to in writing, the SAFE Network Software distributed
// under the GPL Licence is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied. Please review the Licences for the specific language governing
// permissions and limitations relating to use of the SAFE Network Software.

mod terminal;

#[macro_use]
extern crate tracing;

use clap::Parser;
use color_eyre::eyre::Result;
use node_launchpad::{
    app::App,
    config::configure_winsw,
    utils::{initialize_logging, initialize_panic_handler},
};
#[cfg(target_os = "windows")]
use sn_node_manager::config::is_running_as_root;
use sn_peers_acquisition::PeersArgs;
use sn_protocol::version::IDENTIFY_PROTOCOL_STR;
use std::{env, path::PathBuf};
use tokio::task::LocalSet;

#[derive(Parser, Debug)]
#[command(disable_version_flag = true)]
pub struct Cli {
    #[arg(
        short,
        long,
        value_name = "FLOAT",
        help = "Tick rate, i.e. number of ticks per second",
        default_value_t = 1.0
    )]
    pub tick_rate: f64,

    #[arg(
        short,
        long,
        value_name = "FLOAT",
        help = "Frame rate, i.e. number of frames per second",
        default_value_t = 60.0
    )]
    pub frame_rate: f64,

    /// Provide a path for the safenode binary to be used by the service.
    ///
    /// Useful for creating the service using a custom built binary.
    #[clap(long)]
    safenode_path: Option<PathBuf>,

    #[command(flatten)]
    pub(crate) peers: PeersArgs,

    /// Print the crate version.
    #[clap(long)]
    crate_version: bool,

    /// Print the network protocol version.
    #[clap(long)]
    protocol_version: bool,

    /// Print the package version.
    #[clap(long)]
    #[cfg(not(feature = "nightly"))]
    package_version: bool,

    /// Print the version.
    #[clap(long)]
    version: bool,
}

async fn tokio_main() -> Result<()> {
    initialize_panic_handler()?;
    let args = Cli::parse();

    if args.version {
        println!(
            "{}",
            sn_build_info::version_string(
                "Autonomi Node Launchpad",
                env!("CARGO_PKG_VERSION"),
                None
            )
        );
        return Ok(());
    }

    if args.crate_version {
        println!("{}", env!("CARGO_PKG_VERSION"));
        return Ok(());
    }

    if args.protocol_version {
        println!("{}", IDENTIFY_PROTOCOL_STR.to_string());
        return Ok(());
    }

    #[cfg(not(feature = "nightly"))]
    if args.package_version {
        println!("{}", sn_build_info::package_version());
        return Ok(());
    }

    info!("Starting app with args: {args:?}");
    let mut app = App::new(
        args.tick_rate,
        args.frame_rate,
        args.peers,
        args.safenode_path,
        None,
    )
    .await?;
    app.run().await?;

    Ok(())
}

fn is_running_in_terminal() -> bool {
    atty::is(atty::Stream::Stdout)
}

#[tokio::main]
async fn main() -> Result<()> {
    initialize_logging()?;
    configure_winsw().await?;

    if !is_running_in_terminal() {
        info!("Running in non-terminal mode. Launching terminal.");
        // If we weren't already running in a terminal, this process returns early, having spawned
        // a new process that launches a terminal.
        let terminal_type = terminal::detect_and_setup_terminal()?;
        terminal::launch_terminal(&terminal_type)
            .inspect_err(|err| error!("Error while launching terminal: {err:?}"))?;
        return Ok(());
    } else {
        // Windows spawns the terminal directly, so the check for root has to happen here as well.
        debug!("Running inside a terminal!");
        #[cfg(target_os = "windows")]
        if !is_running_as_root() {
            {
                // TODO: There is no terminal to show this error message when double clicking on the exe.
                error!("Admin privileges required to run on Windows. Exiting.");
                color_eyre::eyre::bail!("Admin privileges required to run on Windows. Exiting.");
            }
        }
    }

    // Construct a local task set that can run `!Send` futures.
    let local = LocalSet::new();
    local
        .run_until(async {
            if let Err(e) = tokio_main().await {
                eprintln!("{} failed:", env!("CARGO_PKG_NAME"));

                Err(e)
            } else {
                Ok(())
            }
        })
        .await
}
