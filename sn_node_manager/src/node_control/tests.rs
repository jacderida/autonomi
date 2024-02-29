// Copyright (C) 2024 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under The General Public License (GPL), version 3.
// Unless required by applicable law or agreed to in writing, the SAFE Network Software distributed
// under the GPL Licence is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied. Please review the Licences for the specific language governing
// permissions and limitations relating to use of the SAFE Network Software.

use crate::{
    node_control::{
        add,
        config::{AddServiceOptions, InstallNodeServiceCtxBuilder},
        remove, stop,
    },
    VerbosityLevel,
};
use assert_fs::prelude::*;
use assert_matches::assert_matches;
use async_trait::async_trait;
use color_eyre::Result;
use libp2p::Multiaddr;
use libp2p_identity::PeerId;
use mockall::{mock, predicate::*, Sequence};
use predicates::prelude::*;
use service_manager::ServiceInstallCtx;
use sn_service_management::control::ServiceControl;
use sn_service_management::error::Result as ServiceControlResult;
use sn_service_management::rpc::{NetworkInfo, NodeInfo, RecordAddress, RpcActions};
use sn_service_management::{NodeRegistry, NodeServiceData, ServiceStatus};
use std::{
    net::{IpAddr, Ipv4Addr, SocketAddr},
    path::PathBuf,
    str::FromStr,
};

#[cfg(not(target_os = "windows"))]
const SAFENODE_FILE_NAME: &str = "safenode";
#[cfg(target_os = "windows")]
const SAFENODE_FILE_NAME: &str = "safenode.exe";

mock! {
    pub ServiceControl {}
    impl ServiceControl for ServiceControl {
        fn create_service_user(&self, username: &str) -> ServiceControlResult<()>;
        fn get_available_port(&self) -> ServiceControlResult<u16>;
        fn install(&self, install_ctx: ServiceInstallCtx) -> ServiceControlResult<()>;
        fn get_process_pid(&self, name: &str) -> ServiceControlResult<u32>;
        fn is_service_process_running(&self, pid: u32) -> bool;
        fn start(&self, service_name: &str) -> ServiceControlResult<()>;
        fn stop(&self, service_name: &str) -> ServiceControlResult<()>;
        fn uninstall(&self, service_name: &str) -> ServiceControlResult<()>;
        fn wait(&self, delay: u64);
    }
}

#[cfg(target_os = "windows")]
fn get_username() -> String {
    std::env::var("USERNAME").expect("Failed to get username")
}

#[cfg(not(target_os = "windows"))]
fn get_username() -> String {
    std::env::var("USER").expect("Failed to get username")
}

#[tokio::test]
async fn add_genesis_node_should_use_latest_version_and_add_one_service() -> Result<()> {
    let tmp_data_dir = assert_fs::TempDir::new()?;
    let node_reg_path = tmp_data_dir.child("node_reg.json");

    let latest_version = "0.96.4";
    let temp_dir = assert_fs::TempDir::new()?;
    let node_data_dir = temp_dir.child("data");
    node_data_dir.create_dir_all()?;
    let node_logs_dir = temp_dir.child("logs");
    node_logs_dir.create_dir_all()?;
    let safenode_download_path = temp_dir.child(SAFENODE_FILE_NAME);
    safenode_download_path.write_binary(b"fake safenode bin")?;

    let mut node_registry = NodeRegistry {
        faucet: None,
        save_path: node_reg_path.to_path_buf(),
        nodes: vec![],
        bootstrap_peers: vec![],
        environment_variables: None,
        daemon: None,
    };

    let mut mock_service_control = MockServiceControl::new();
    let mut seq = Sequence::new();
    mock_service_control
        .expect_get_available_port()
        .times(1)
        .returning(|| Ok(8081))
        .in_sequence(&mut seq);

    let install_ctx = InstallNodeServiceCtxBuilder {
        local: true,
        genesis: true,
        name: "safenode1".to_string(),
        safenode_path: node_data_dir
            .to_path_buf()
            .join("safenode1")
            .join(SAFENODE_FILE_NAME),
        node_port: None,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
        service_user: get_username(),
        log_dir_path: node_logs_dir.to_path_buf().join("safenode1"),
        data_dir_path: node_data_dir.to_path_buf().join("safenode1"),
        bootstrap_peers: vec![],
        env_variables: None,
    }
    .build()?;
    mock_service_control
        .expect_install()
        .times(1)
        .with(eq(install_ctx))
        .returning(|_| Ok(()))
        .in_sequence(&mut seq);

    add(
        AddServiceOptions {
            local: true,
            genesis: true,
            count: None,
            safenode_bin_path: safenode_download_path.to_path_buf(),
            safenode_dir_path: temp_dir.to_path_buf(),
            service_data_dir_path: node_data_dir.to_path_buf(),
            service_log_dir_path: node_logs_dir.to_path_buf(),
            node_port: None,
            bootstrap_peers: vec![],
            rpc_address: None,
            url: None,
            user: get_username(),
            version: latest_version.to_string(),
            env_variables: None,
        },
        &mut node_registry,
        &mock_service_control,
        VerbosityLevel::Normal,
    )
    .await?;

    safenode_download_path.assert(predicate::path::missing());
    node_data_dir.assert(predicate::path::is_dir());
    node_logs_dir.assert(predicate::path::is_dir());

    node_reg_path.assert(predicates::path::is_file());
    assert_eq!(node_registry.nodes.len(), 1);
    assert!(node_registry.nodes[0].genesis);
    assert_eq!(node_registry.nodes[0].version, latest_version);
    assert_eq!(node_registry.nodes[0].service_name, "safenode1");
    assert_eq!(node_registry.nodes[0].user, get_username());
    assert_eq!(node_registry.nodes[0].number, 1);
    assert_eq!(
        node_registry.nodes[0].rpc_socket_addr,
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081)
    );
    assert_eq!(
        node_registry.nodes[0].log_dir_path,
        node_logs_dir.to_path_buf().join("safenode1")
    );
    assert_eq!(
        node_registry.nodes[0].data_dir_path,
        node_data_dir.to_path_buf().join("safenode1")
    );
    assert_matches!(node_registry.nodes[0].status, ServiceStatus::Added);

    Ok(())
}

#[tokio::test]
async fn add_genesis_node_should_return_an_error_if_there_is_already_a_genesis_node() -> Result<()>
{
    let tmp_data_dir = assert_fs::TempDir::new()?;
    let node_reg_path = tmp_data_dir.child("node_reg.json");

    let mock_service_control = MockServiceControl::new();

    let latest_version = "0.96.4";
    let mut node_registry = NodeRegistry {
        faucet: None,
        save_path: node_reg_path.to_path_buf(),
        nodes: vec![NodeServiceData {
            genesis: true,
            local: false,
            service_name: "safenode1".to_string(),
            user: "safe".to_string(),
            number: 1,
            rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
            version: latest_version.to_string(),
            status: ServiceStatus::Added,
            listen_addr: None,
            pid: None,
            peer_id: None,
            log_dir_path: PathBuf::from("/var/log/safenode/safenode1"),
            data_dir_path: PathBuf::from("/var/safenode-manager/services/safenode1"),
            safenode_path: PathBuf::from("/var/safenode-manager/services/safenode1/safenode"),
            connected_peers: None,
        }],
        bootstrap_peers: vec![],
        environment_variables: None,
        daemon: None,
    };

    let temp_dir = assert_fs::TempDir::new()?;
    let node_data_dir = temp_dir.child("safenode1");
    node_data_dir.create_dir_all()?;
    let node_logs_dir = temp_dir.child("logs");
    node_logs_dir.create_dir_all()?;
    let safenode_download_path = temp_dir.child(SAFENODE_FILE_NAME);
    safenode_download_path.write_binary(b"fake safenode bin")?;

    let custom_rpc_address = Ipv4Addr::new(127, 0, 0, 1);

    let result = add(
        AddServiceOptions {
            local: true,
            genesis: true,
            count: None,
            safenode_bin_path: safenode_download_path.to_path_buf(),
            safenode_dir_path: temp_dir.to_path_buf(),
            service_data_dir_path: node_data_dir.to_path_buf(),
            service_log_dir_path: node_logs_dir.to_path_buf(),
            node_port: None,
            bootstrap_peers: vec![],
            rpc_address: Some(custom_rpc_address),
            url: None,
            user: get_username(),
            version: latest_version.to_string(),
            env_variables: None,
        },
        &mut node_registry,
        &mock_service_control,
        VerbosityLevel::Normal,
    )
    .await;

    assert_eq!(
        Err("A genesis node already exists".to_string()),
        result.map_err(|e| e.to_string())
    );

    Ok(())
}

#[tokio::test]
async fn add_genesis_node_should_return_an_error_if_count_is_greater_than_1() -> Result<()> {
    let tmp_data_dir = assert_fs::TempDir::new()?;
    let node_reg_path = tmp_data_dir.child("node_reg.json");

    let mock_service_control = MockServiceControl::new();

    let mut node_registry = NodeRegistry {
        faucet: None,
        save_path: node_reg_path.to_path_buf(),
        nodes: vec![],
        bootstrap_peers: vec![],
        environment_variables: None,
        daemon: None,
    };

    let latest_version = "0.96.4";
    let temp_dir = assert_fs::TempDir::new()?;
    let node_data_dir = temp_dir.child("safenode1");
    node_data_dir.create_dir_all()?;
    let node_logs_dir = temp_dir.child("logs");
    node_logs_dir.create_dir_all()?;
    let safenode_download_path = temp_dir.child(SAFENODE_FILE_NAME);
    safenode_download_path.write_binary(b"fake safenode bin")?;

    let custom_rpc_address = Ipv4Addr::new(127, 0, 0, 1);

    let result = add(
        AddServiceOptions {
            local: true,
            genesis: true,
            count: Some(3),
            safenode_bin_path: safenode_download_path.to_path_buf(),
            safenode_dir_path: temp_dir.to_path_buf(),
            service_data_dir_path: node_data_dir.to_path_buf(),
            service_log_dir_path: node_logs_dir.to_path_buf(),
            node_port: None,
            bootstrap_peers: vec![],
            rpc_address: Some(custom_rpc_address),
            url: None,
            user: get_username(),
            version: latest_version.to_string(),
            env_variables: None,
        },
        &mut node_registry,
        &mock_service_control,
        VerbosityLevel::Normal,
    )
    .await;

    assert_eq!(
        Err("A genesis node can only be added as a single node".to_string()),
        result.map_err(|e| e.to_string())
    );

    Ok(())
}

#[tokio::test]
async fn add_node_should_use_latest_version_and_add_three_services() -> Result<()> {
    let tmp_data_dir = assert_fs::TempDir::new()?;
    let node_reg_path = tmp_data_dir.child("node_reg.json");

    let mut mock_service_control = MockServiceControl::new();

    let mut node_registry = NodeRegistry {
        faucet: None,
        save_path: node_reg_path.to_path_buf(),
        nodes: vec![],
        bootstrap_peers: vec![],
        environment_variables: None,
        daemon: None,
    };

    let latest_version = "0.96.4";
    let temp_dir = assert_fs::TempDir::new()?;
    let node_data_dir = temp_dir.child("data");
    node_data_dir.create_dir_all()?;
    let node_logs_dir = temp_dir.child("logs");
    node_logs_dir.create_dir_all()?;
    let safenode_download_path = temp_dir.child(SAFENODE_FILE_NAME);
    safenode_download_path.write_binary(b"fake safenode bin")?;

    let mut seq = Sequence::new();

    // Expected calls for first installation
    mock_service_control
        .expect_get_available_port()
        .times(1)
        .returning(|| Ok(8081))
        .in_sequence(&mut seq);

    let install_ctx = InstallNodeServiceCtxBuilder {
        local: false,
        genesis: false,
        name: "safenode1".to_string(),
        safenode_path: node_data_dir
            .to_path_buf()
            .join("safenode1")
            .join(SAFENODE_FILE_NAME),
        node_port: None,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
        service_user: get_username(),
        log_dir_path: node_logs_dir.to_path_buf().join("safenode1"),
        data_dir_path: node_data_dir.to_path_buf().join("safenode1"),
        bootstrap_peers: vec![],
        env_variables: None,
    }
    .build()?;

    mock_service_control
        .expect_install()
        .times(1)
        .with(eq(install_ctx))
        .returning(|_| Ok(()))
        .in_sequence(&mut seq);

    // Expected calls for second installation
    mock_service_control
        .expect_get_available_port()
        .times(1)
        .returning(|| Ok(8083))
        .in_sequence(&mut seq);
    let install_ctx = InstallNodeServiceCtxBuilder {
        local: false,
        genesis: false,
        name: "safenode2".to_string(),
        safenode_path: node_data_dir
            .to_path_buf()
            .join("safenode2")
            .join(SAFENODE_FILE_NAME),
        node_port: None,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8083),
        service_user: get_username(),
        log_dir_path: node_logs_dir.to_path_buf().join("safenode2"),
        data_dir_path: node_data_dir.to_path_buf().join("safenode2"),
        bootstrap_peers: vec![],
        env_variables: None,
    }
    .build()?;

    mock_service_control
        .expect_install()
        .times(1)
        .with(eq(install_ctx))
        .returning(|_| Ok(()))
        .in_sequence(&mut seq);

    // Expected calls for third installation
    mock_service_control
        .expect_get_available_port()
        .times(1)
        .returning(|| Ok(8085))
        .in_sequence(&mut seq);
    let install_ctx = InstallNodeServiceCtxBuilder {
        local: false,
        genesis: false,
        name: "safenode3".to_string(),
        safenode_path: node_data_dir
            .to_path_buf()
            .join("safenode3")
            .join(SAFENODE_FILE_NAME),
        node_port: None,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8085),
        service_user: get_username(),
        log_dir_path: node_logs_dir.to_path_buf().join("safenode3"),
        data_dir_path: node_data_dir.to_path_buf().join("safenode3"),
        bootstrap_peers: vec![],
        env_variables: None,
    }
    .build()?;

    mock_service_control
        .expect_install()
        .times(1)
        .with(eq(install_ctx))
        .returning(|_| Ok(()))
        .in_sequence(&mut seq);

    add(
        AddServiceOptions {
            local: false,
            genesis: false,
            count: Some(3),
            bootstrap_peers: vec![],
            node_port: None,
            rpc_address: None,
            safenode_bin_path: safenode_download_path.to_path_buf(),
            safenode_dir_path: temp_dir.to_path_buf(),
            service_data_dir_path: node_data_dir.to_path_buf(),
            service_log_dir_path: node_logs_dir.to_path_buf(),
            url: None,
            user: get_username(),
            version: latest_version.to_string(),
            env_variables: None,
        },
        &mut node_registry,
        &mock_service_control,
        VerbosityLevel::Normal,
    )
    .await?;

    assert_eq!(node_registry.nodes.len(), 3);
    assert_eq!(node_registry.nodes[0].version, latest_version);
    assert_eq!(node_registry.nodes[0].service_name, "safenode1");
    assert_eq!(node_registry.nodes[0].user, get_username());
    assert_eq!(node_registry.nodes[0].number, 1);
    assert_eq!(
        node_registry.nodes[0].rpc_socket_addr,
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081)
    );
    assert_eq!(
        node_registry.nodes[0].log_dir_path,
        node_logs_dir.to_path_buf().join("safenode1")
    );
    assert_eq!(
        node_registry.nodes[0].data_dir_path,
        node_data_dir.to_path_buf().join("safenode1")
    );
    assert_matches!(node_registry.nodes[0].status, ServiceStatus::Added);
    assert_eq!(node_registry.nodes[1].version, latest_version);
    assert_eq!(node_registry.nodes[1].service_name, "safenode2");
    assert_eq!(node_registry.nodes[1].user, get_username());
    assert_eq!(node_registry.nodes[1].number, 2);
    assert_eq!(
        node_registry.nodes[1].rpc_socket_addr,
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8083)
    );
    assert_eq!(
        node_registry.nodes[1].log_dir_path,
        node_logs_dir.to_path_buf().join("safenode2")
    );
    assert_eq!(
        node_registry.nodes[1].data_dir_path,
        node_data_dir.to_path_buf().join("safenode2")
    );
    assert_matches!(node_registry.nodes[1].status, ServiceStatus::Added);
    assert_eq!(node_registry.nodes[2].version, latest_version);
    assert_eq!(node_registry.nodes[2].service_name, "safenode3");
    assert_eq!(node_registry.nodes[2].user, get_username());
    assert_eq!(node_registry.nodes[2].number, 3);
    assert_eq!(
        node_registry.nodes[2].rpc_socket_addr,
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8085)
    );
    assert_eq!(
        node_registry.nodes[2].log_dir_path,
        node_logs_dir.to_path_buf().join("safenode3")
    );
    assert_eq!(
        node_registry.nodes[2].data_dir_path,
        node_data_dir.to_path_buf().join("safenode3")
    );
    assert_matches!(node_registry.nodes[2].status, ServiceStatus::Added);

    Ok(())
}

#[tokio::test]
async fn add_node_should_update_the_bootstrap_peers_inside_node_registry() -> Result<()> {
    let tmp_data_dir = assert_fs::TempDir::new()?;
    let node_reg_path = tmp_data_dir.child("node_reg.json");

    let mut mock_service_control = MockServiceControl::new();

    let mut old_peers  = vec![Multiaddr::from_str("/ip4/64.227.35.186/udp/33188/quic-v1/p2p/12D3KooWDrx4zfUuJgz7jSusC28AZRDRbj7eo3WKZigPsw9tVKs3")?];
    let new_peers = vec![Multiaddr::from_str("/ip4/178.62.78.116/udp/45442/quic-v1/p2p/12D3KooWLH4E68xFqoSKuF2JPQQhzaAg7GNvN1vpxoLMgJq6Zqz8")?];

    let mut node_registry = NodeRegistry {
        faucet: None,
        save_path: node_reg_path.to_path_buf(),
        nodes: vec![],
        bootstrap_peers: old_peers.clone(),
        environment_variables: None,
        daemon: None,
    };
    let latest_version = "0.96.4";
    let temp_dir = assert_fs::TempDir::new()?;
    let node_data_dir = temp_dir.child("data");
    node_data_dir.create_dir_all()?;
    let node_logs_dir = temp_dir.child("logs");
    node_logs_dir.create_dir_all()?;
    let safenode_download_path = temp_dir.child(SAFENODE_FILE_NAME);
    safenode_download_path.write_binary(b"fake safenode bin")?;

    let mut seq = Sequence::new();

    mock_service_control
        .expect_get_available_port()
        .times(1)
        .returning(|| Ok(12001))
        .in_sequence(&mut seq);

    let install_ctx = InstallNodeServiceCtxBuilder {
        local: false,
        genesis: false,
        name: "safenode1".to_string(),
        safenode_path: node_data_dir
            .to_path_buf()
            .join("safenode1")
            .join(SAFENODE_FILE_NAME),
        node_port: None,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 12001),
        service_user: get_username(),
        log_dir_path: node_logs_dir.to_path_buf().join("safenode1"),
        data_dir_path: node_data_dir.to_path_buf().join("safenode1"),
        bootstrap_peers: new_peers.clone(),
        env_variables: None,
    }
    .build()?;
    mock_service_control
        .expect_install()
        .times(1)
        .with(eq(install_ctx))
        .returning(|_| Ok(()))
        .in_sequence(&mut seq);

    add(
        AddServiceOptions {
            local: false,
            genesis: false,
            count: None,
            safenode_bin_path: safenode_download_path.to_path_buf(),
            safenode_dir_path: temp_dir.to_path_buf(),
            service_data_dir_path: node_data_dir.to_path_buf(),
            service_log_dir_path: node_logs_dir.to_path_buf(),
            bootstrap_peers: new_peers.clone(),
            node_port: None,
            rpc_address: Some(Ipv4Addr::new(127, 0, 0, 1)),
            url: None,
            user: get_username(),
            version: latest_version.to_string(),
            env_variables: None,
        },
        &mut node_registry,
        &mock_service_control,
        VerbosityLevel::Normal,
    )
    .await?;

    safenode_download_path.assert(predicate::path::missing());
    node_data_dir.assert(predicate::path::is_dir());
    node_logs_dir.assert(predicate::path::is_dir());

    old_peers.extend(new_peers);
    assert_eq!(node_registry.bootstrap_peers, old_peers);

    assert_eq!(node_registry.nodes.len(), 1);
    assert_eq!(node_registry.nodes[0].version, latest_version);
    assert_eq!(node_registry.nodes[0].service_name, "safenode1");
    assert_eq!(node_registry.nodes[0].user, get_username());
    assert_eq!(node_registry.nodes[0].number, 1);
    assert_eq!(
        node_registry.nodes[0].rpc_socket_addr,
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 12001)
    );
    assert_eq!(
        node_registry.nodes[0].log_dir_path,
        node_logs_dir.to_path_buf().join("safenode1")
    );
    assert_eq!(
        node_registry.nodes[0].data_dir_path,
        node_data_dir.to_path_buf().join("safenode1")
    );
    assert_matches!(node_registry.nodes[0].status, ServiceStatus::Added);

    Ok(())
}

#[tokio::test]
async fn add_node_should_update_the_environment_variables_inside_node_registry() -> Result<()> {
    let tmp_data_dir = assert_fs::TempDir::new()?;
    let node_reg_path = tmp_data_dir.child("node_reg.json");

    let mut mock_service_control = MockServiceControl::new();

    let env_variables = Some(vec![
        ("SN_LOG".to_owned(), "all".to_owned()),
        ("RUST_LOG".to_owned(), "libp2p=debug".to_owned()),
    ]);

    let mut node_registry = NodeRegistry {
        faucet: None,
        save_path: node_reg_path.to_path_buf(),
        nodes: vec![],
        bootstrap_peers: vec![],
        environment_variables: None,
        daemon: None,
    };
    let latest_version = "0.96.4";
    let temp_dir = assert_fs::TempDir::new()?;
    let node_data_dir = temp_dir.child("data");
    node_data_dir.create_dir_all()?;
    let node_logs_dir = temp_dir.child("logs");
    node_logs_dir.create_dir_all()?;
    let safenode_download_path = temp_dir.child(SAFENODE_FILE_NAME);
    safenode_download_path.write_binary(b"fake safenode bin")?;

    let mut seq = Sequence::new();

    mock_service_control
        .expect_get_available_port()
        .times(1)
        .returning(|| Ok(12001))
        .in_sequence(&mut seq);
    let install_ctx = InstallNodeServiceCtxBuilder {
        local: false,
        genesis: false,
        name: "safenode1".to_string(),
        safenode_path: node_data_dir
            .to_path_buf()
            .join("safenode1")
            .join(SAFENODE_FILE_NAME),
        node_port: None,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 12001),
        service_user: get_username(),
        log_dir_path: node_logs_dir.to_path_buf().join("safenode1"),
        data_dir_path: node_data_dir.to_path_buf().join("safenode1"),
        bootstrap_peers: vec![],
        env_variables: env_variables.clone(),
    }
    .build()?;
    mock_service_control
        .expect_install()
        .times(1)
        .with(eq(install_ctx))
        .returning(|_| Ok(()))
        .in_sequence(&mut seq);

    add(
        AddServiceOptions {
            local: false,
            genesis: false,
            count: None,
            safenode_bin_path: safenode_download_path.to_path_buf(),
            safenode_dir_path: temp_dir.to_path_buf(),
            service_data_dir_path: node_data_dir.to_path_buf(),
            service_log_dir_path: node_logs_dir.to_path_buf(),
            bootstrap_peers: vec![],
            node_port: None,
            rpc_address: Some(Ipv4Addr::new(127, 0, 0, 1)),
            url: None,
            user: get_username(),
            version: latest_version.to_string(),
            env_variables: env_variables.clone(),
        },
        &mut node_registry,
        &mock_service_control,
        VerbosityLevel::Normal,
    )
    .await?;

    safenode_download_path.assert(predicate::path::missing());
    node_data_dir.assert(predicate::path::is_dir());
    node_logs_dir.assert(predicate::path::is_dir());

    assert_eq!(node_registry.environment_variables, env_variables);

    assert_eq!(node_registry.nodes.len(), 1);
    assert_eq!(node_registry.nodes[0].version, latest_version);
    assert_eq!(node_registry.nodes[0].service_name, "safenode1");
    assert_eq!(node_registry.nodes[0].user, get_username());
    assert_eq!(node_registry.nodes[0].number, 1);
    assert_eq!(
        node_registry.nodes[0].rpc_socket_addr,
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 12001)
    );
    assert_eq!(
        node_registry.nodes[0].log_dir_path,
        node_logs_dir.to_path_buf().join("safenode1")
    );
    assert_eq!(
        node_registry.nodes[0].data_dir_path,
        node_data_dir.to_path_buf().join("safenode1")
    );
    assert_matches!(node_registry.nodes[0].status, ServiceStatus::Added);

    Ok(())
}

#[tokio::test]
async fn add_new_node_should_add_another_service() -> Result<()> {
    let tmp_data_dir = assert_fs::TempDir::new()?;
    let node_reg_path = tmp_data_dir.child("node_reg.json");

    let mut mock_service_control = MockServiceControl::new();

    let latest_version = "0.96.4";
    let mut node_registry = NodeRegistry {
        faucet: None,
        save_path: node_reg_path.to_path_buf(),
        nodes: vec![NodeServiceData {
            genesis: true,
            local: false,
            service_name: "safenode1".to_string(),
            user: "safe".to_string(),
            number: 1,
            rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
            version: latest_version.to_string(),
            status: ServiceStatus::Added,
            pid: None,
            peer_id: None,
            listen_addr: None,
            log_dir_path: PathBuf::from("/var/log/safenode/safenode1"),
            data_dir_path: PathBuf::from("/var/safenode-manager/services/safenode1"),
            safenode_path: PathBuf::from("/var/safenode-manager/services/safenode1/safenode"),
            connected_peers: None,
        }],
        bootstrap_peers: vec![],
        environment_variables: None,
        daemon: None,
    };
    let temp_dir = assert_fs::TempDir::new()?;
    let node_data_dir = temp_dir.child("safenode1");
    node_data_dir.create_dir_all()?;
    let node_logs_dir = temp_dir.child("logs");
    node_logs_dir.create_dir_all()?;
    let safenode_download_path = temp_dir.child(SAFENODE_FILE_NAME);
    safenode_download_path.write_binary(b"fake safenode bin")?;

    let mut seq = Sequence::new();
    mock_service_control
        .expect_get_available_port()
        .times(1)
        .returning(|| Ok(8083))
        .in_sequence(&mut seq);
    let install_ctx = InstallNodeServiceCtxBuilder {
        local: false,
        genesis: false,
        name: "safenode2".to_string(),
        safenode_path: node_data_dir
            .to_path_buf()
            .join("safenode2")
            .join(SAFENODE_FILE_NAME),
        node_port: None,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8083),
        service_user: get_username(),
        log_dir_path: node_logs_dir.to_path_buf().join("safenode2"),
        data_dir_path: node_data_dir.to_path_buf().join("safenode2"),
        bootstrap_peers: vec![],
        env_variables: None,
    }
    .build()?;

    mock_service_control
        .expect_install()
        .times(1)
        .with(eq(install_ctx))
        .returning(|_| Ok(()))
        .in_sequence(&mut seq);

    add(
        AddServiceOptions {
            local: false,
            genesis: false,
            count: None,
            bootstrap_peers: vec![],
            node_port: None,
            rpc_address: None,
            safenode_bin_path: safenode_download_path.to_path_buf(),
            safenode_dir_path: temp_dir.to_path_buf(),
            service_data_dir_path: node_data_dir.to_path_buf(),
            service_log_dir_path: node_logs_dir.to_path_buf(),
            url: None,
            user: get_username(),
            version: latest_version.to_string(),
            env_variables: None,
        },
        &mut node_registry,
        &mock_service_control,
        VerbosityLevel::Normal,
    )
    .await?;

    assert_eq!(node_registry.nodes.len(), 2);
    assert_eq!(node_registry.nodes[1].version, latest_version);
    assert_eq!(node_registry.nodes[1].service_name, "safenode2");
    assert_eq!(node_registry.nodes[1].user, get_username());
    assert_eq!(node_registry.nodes[1].number, 2);
    assert_eq!(
        node_registry.nodes[1].rpc_socket_addr,
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8083)
    );
    assert_eq!(
        node_registry.nodes[1].log_dir_path,
        node_logs_dir.to_path_buf().join("safenode2")
    );
    assert_eq!(
        node_registry.nodes[1].data_dir_path,
        node_data_dir.to_path_buf().join("safenode2")
    );
    assert_matches!(node_registry.nodes[0].status, ServiceStatus::Added);

    Ok(())
}

#[tokio::test]
async fn add_node_should_use_custom_ports_for_one_service() -> Result<()> {
    let tmp_data_dir = assert_fs::TempDir::new()?;
    let node_reg_path = tmp_data_dir.child("node_reg.json");

    let mut mock_service_control = MockServiceControl::new();

    let mut node_registry = NodeRegistry {
        faucet: None,
        save_path: node_reg_path.to_path_buf(),
        nodes: vec![],
        bootstrap_peers: vec![],
        environment_variables: None,
        daemon: None,
    };
    let latest_version = "0.96.4";
    let temp_dir = assert_fs::TempDir::new()?;
    let node_data_dir = temp_dir.child("data");
    node_data_dir.create_dir_all()?;
    let node_logs_dir = temp_dir.child("logs");
    node_logs_dir.create_dir_all()?;
    let safenode_download_path = temp_dir.child(SAFENODE_FILE_NAME);
    safenode_download_path.write_binary(b"fake safenode bin")?;

    let custom_port = 12000;

    let mut seq = Sequence::new();

    mock_service_control
        .expect_get_available_port()
        .times(1)
        .returning(|| Ok(12001))
        .in_sequence(&mut seq);
    let install_ctx = InstallNodeServiceCtxBuilder {
        local: false,
        genesis: false,
        name: "safenode1".to_string(),
        safenode_path: node_data_dir
            .to_path_buf()
            .join("safenode1")
            .join(SAFENODE_FILE_NAME),
        node_port: Some(custom_port),
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 12001),
        service_user: get_username(),
        log_dir_path: node_logs_dir.to_path_buf().join("safenode1"),
        data_dir_path: node_data_dir.to_path_buf().join("safenode1"),
        bootstrap_peers: vec![],
        env_variables: None,
    }
    .build()?;

    mock_service_control
        .expect_install()
        .times(1)
        .with(eq(install_ctx))
        .returning(|_| Ok(()))
        .in_sequence(&mut seq);

    add(
        AddServiceOptions {
            local: false,
            genesis: false,
            count: None,
            safenode_bin_path: safenode_download_path.to_path_buf(),
            safenode_dir_path: temp_dir.to_path_buf(),
            service_data_dir_path: node_data_dir.to_path_buf(),
            service_log_dir_path: node_logs_dir.to_path_buf(),
            bootstrap_peers: vec![],
            node_port: Some(custom_port),
            rpc_address: Some(Ipv4Addr::new(127, 0, 0, 1)),
            url: None,
            user: get_username(),
            version: latest_version.to_string(),
            env_variables: None,
        },
        &mut node_registry,
        &mock_service_control,
        VerbosityLevel::Normal,
    )
    .await?;

    safenode_download_path.assert(predicate::path::missing());
    node_data_dir.assert(predicate::path::is_dir());
    node_logs_dir.assert(predicate::path::is_dir());

    assert_eq!(node_registry.nodes.len(), 1);
    assert_eq!(node_registry.nodes[0].version, latest_version);
    assert_eq!(node_registry.nodes[0].service_name, "safenode1");
    assert_eq!(node_registry.nodes[0].user, get_username());
    assert_eq!(node_registry.nodes[0].number, 1);
    assert_eq!(
        node_registry.nodes[0].rpc_socket_addr,
        SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 12001)
    );
    assert_eq!(
        node_registry.nodes[0].log_dir_path,
        node_logs_dir.to_path_buf().join("safenode1")
    );
    assert_eq!(
        node_registry.nodes[0].data_dir_path,
        node_data_dir.to_path_buf().join("safenode1")
    );
    assert_matches!(node_registry.nodes[0].status, ServiceStatus::Added);

    Ok(())
}

#[tokio::test]
async fn add_node_should_return_error_if_custom_port_is_used_and_more_than_one_service_is_used(
) -> Result<()> {
    let tmp_data_dir = assert_fs::TempDir::new()?;
    let node_reg_path = tmp_data_dir.child("node_reg.json");

    let mut node_registry = NodeRegistry {
        faucet: None,
        save_path: node_reg_path.to_path_buf(),
        nodes: vec![],
        bootstrap_peers: vec![],
        environment_variables: None,
        daemon: None,
    };
    let latest_version = "0.96.4";
    let temp_dir = assert_fs::TempDir::new()?;
    let node_data_dir = temp_dir.child("data");
    node_data_dir.create_dir_all()?;
    let node_logs_dir = temp_dir.child("logs");
    node_logs_dir.create_dir_all()?;

    let custom_port = 12000;

    let result = add(
        AddServiceOptions {
            local: true,
            genesis: false,
            count: Some(3),
            safenode_bin_path: PathBuf::new(),
            safenode_dir_path: temp_dir.to_path_buf(),
            service_data_dir_path: node_data_dir.to_path_buf(),
            service_log_dir_path: node_logs_dir.to_path_buf(),
            bootstrap_peers: vec![],
            node_port: Some(custom_port),
            rpc_address: None,
            url: None,
            user: get_username(),
            version: latest_version.to_string(),
            env_variables: None,
        },
        &mut node_registry,
        &MockServiceControl::new(),
        VerbosityLevel::Normal,
    )
    .await;

    match result {
        Ok(_) => panic!("This test should result in an error"),
        Err(e) => {
            assert_eq!(
                format!("Custom node port can only be used when adding a single service"),
                e.to_string()
            )
        }
    }

    Ok(())
}

mock! {
    pub RpcClient {}
    #[async_trait]
    impl RpcActions for RpcClient {
        async fn node_info(&self) -> ServiceControlResult<NodeInfo>;
        async fn network_info(&self) -> ServiceControlResult<NetworkInfo>;
        async fn record_addresses(&self) -> ServiceControlResult<Vec<RecordAddress>>;
        async fn gossipsub_subscribe(&self, topic: &str) -> ServiceControlResult<()>;
        async fn gossipsub_unsubscribe(&self, topic: &str) -> ServiceControlResult<()>;
        async fn gossipsub_publish(&self, topic: &str, message: &str) -> ServiceControlResult<()>;
        async fn node_restart(&self, delay_millis: u64, retain_peer_id: bool) -> ServiceControlResult<()>;
        async fn node_stop(&self, delay_millis: u64) -> ServiceControlResult<()>;
        async fn node_update(&self, delay_millis: u64) -> ServiceControlResult<()>;
    }
}

#[tokio::test]
async fn stop_should_stop_a_running_service() -> Result<()> {
    let mut mock_service_control = MockServiceControl::new();

    let mut seq = Sequence::new();
    mock_service_control
        .expect_is_service_process_running()
        .with(eq(1000))
        .times(1)
        .returning(|_| true)
        .in_sequence(&mut seq);
    mock_service_control
        .expect_stop()
        .with(eq("Safenode service 1"))
        .times(1)
        .returning(|_| Ok(()))
        .in_sequence(&mut seq);

    let mut node = NodeServiceData {
        genesis: false,
        local: false,
        version: "0.98.1".to_string(),
        service_name: "Safenode service 1".to_string(),
        user: "safe".to_string(),
        number: 1,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
        status: ServiceStatus::Running,
        pid: Some(1000),
        listen_addr: None,
        peer_id: Some(PeerId::from_str(
            "12D3KooWS2tpXGGTmg2AHFiDh57yPQnat49YHnyqoggzXZWpqkCR",
        )?),
        log_dir_path: PathBuf::from("/var/log/safenode/safenode1"),
        data_dir_path: PathBuf::from("/var/safenode-manager/services/safenode1"),
        safenode_path: PathBuf::from("/var/safenode-manager/services/safenode1/safenode"),
        connected_peers: Some(vec![PeerId::from_str(
            "12D3KooWKbV9vUmZQdHmTwrQqHrqAQpM7GUWHJXeK1xLeh2LVpuc",
        )?]),
    };
    stop(&mut node, &mock_service_control).await?;

    assert_eq!(node.pid, None);
    // The peer ID should be retained on a service stop.
    assert_eq!(
        node.peer_id,
        Some(PeerId::from_str(
            "12D3KooWS2tpXGGTmg2AHFiDh57yPQnat49YHnyqoggzXZWpqkCR"
        )?)
    );
    assert_matches!(node.status, ServiceStatus::Stopped);
    assert_matches!(node.connected_peers, None);

    Ok(())
}

#[tokio::test]
async fn stop_should_not_return_error_for_attempt_to_stop_installed_service() -> Result<()> {
    let mock_service_control = MockServiceControl::new();

    let mut node = NodeServiceData {
        genesis: false,
        local: false,
        version: "0.98.1".to_string(),
        service_name: "safenode1".to_string(),
        user: "safe".to_string(),
        number: 1,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
        status: ServiceStatus::Added,
        pid: None,
        listen_addr: None,
        peer_id: None,
        log_dir_path: PathBuf::from("/var/log/safenode/safenode1"),
        data_dir_path: PathBuf::from("/var/safenode-manager/services/safenode1"),
        safenode_path: PathBuf::from("/var/safenode-manager/services/safenode1/safenode"),
        connected_peers: None,
    };

    let result = stop(&mut node, &mock_service_control).await;

    match result {
        Ok(()) => Ok(()),
        Err(_) => {
            panic!("The stop command should be idempotent and do nothing for a stopped service");
        }
    }
}

#[tokio::test]
async fn stop_should_return_ok_when_attempting_to_stop_service_that_was_already_stopped(
) -> Result<()> {
    let mock_service_control = MockServiceControl::new();

    let mut node = NodeServiceData {
        genesis: false,
        local: false,
        version: "0.98.1".to_string(),
        service_name: "Safenode service 1".to_string(),
        user: "safe".to_string(),
        number: 1,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
        status: ServiceStatus::Stopped,
        pid: None,
        peer_id: None,
        listen_addr: None,
        log_dir_path: PathBuf::from("/var/log/safenode/safenode1"),
        data_dir_path: PathBuf::from("/var/safenode-manager/services/safenode1"),
        safenode_path: PathBuf::from("/var/safenode-manager/services/safenode1/safenode"),
        connected_peers: None,
    };

    stop(&mut node, &mock_service_control).await?;

    assert_eq!(node.pid, None);
    assert_matches!(node.status, ServiceStatus::Stopped);

    Ok(())
}

#[tokio::test]
async fn remove_should_remove_an_added_node() -> Result<()> {
    let temp_dir = assert_fs::TempDir::new()?;
    let log_dir = temp_dir.child("safenode1-logs");
    log_dir.create_dir_all()?;
    let data_dir = temp_dir.child("safenode1-data");
    data_dir.create_dir_all()?;
    let safenode_bin = data_dir.child("safenode");
    safenode_bin.write_binary(b"fake safenode binary")?;

    let mut mock_service_control = MockServiceControl::new();
    mock_service_control
        .expect_uninstall()
        .with(eq("safenode1"))
        .times(1)
        .returning(|_| Ok(()));

    let mut node = NodeServiceData {
        genesis: false,
        local: false,
        version: "0.98.1".to_string(),
        service_name: "safenode1".to_string(),
        user: "safe".to_string(),
        number: 1,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
        status: ServiceStatus::Stopped,
        pid: None,
        peer_id: None,
        listen_addr: None,
        log_dir_path: log_dir.to_path_buf(),
        data_dir_path: data_dir.to_path_buf(),
        safenode_path: safenode_bin.to_path_buf(),
        connected_peers: None,
    };

    remove(&mut node, &mock_service_control, false).await?;

    assert_matches!(node.status, ServiceStatus::Removed);
    log_dir.assert(predicate::path::missing());
    data_dir.assert(predicate::path::missing());

    Ok(())
}

#[tokio::test]
async fn remove_should_return_an_error_if_attempting_to_remove_a_running_node() -> Result<()> {
    let mut mock_service_control = MockServiceControl::new();
    mock_service_control
        .expect_is_service_process_running()
        .with(eq(1000))
        .times(1)
        .returning(|_| true);

    let mut node = NodeServiceData {
        genesis: false,
        local: false,
        version: "0.98.1".to_string(),
        service_name: "safenode1".to_string(),
        user: "safe".to_string(),
        number: 1,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
        status: ServiceStatus::Running,
        pid: Some(1000),
        listen_addr: None,
        peer_id: Some(PeerId::from_str(
            "12D3KooWS2tpXGGTmg2AHFiDh57yPQnat49YHnyqoggzXZWpqkCR",
        )?),
        log_dir_path: PathBuf::from("/var/log/safenode/safenode1"),
        data_dir_path: PathBuf::from("/var/safenode-manager/services/safenode1"),
        safenode_path: PathBuf::from("/var/safenode-manager/services/safenode1/safenode"),
        connected_peers: None,
    };

    let result = remove(&mut node, &mock_service_control, false).await;
    match result {
        Ok(_) => panic!("This test should result in an error"),
        Err(e) => assert_eq!("A running node cannot be removed", e.to_string()),
    }

    Ok(())
}

#[tokio::test]
async fn remove_should_return_an_error_for_a_node_that_was_marked_running_but_was_not_actually_running(
) -> Result<()> {
    let temp_dir = assert_fs::TempDir::new()?;
    let log_dir = temp_dir.child("safenode1-logs");
    log_dir.create_dir_all()?;
    let data_dir = temp_dir.child("safenode1-data");
    data_dir.create_dir_all()?;
    let safenode_bin = data_dir.child("safenode");
    safenode_bin.write_binary(b"fake safenode binary")?;

    let mut mock_service_control = MockServiceControl::new();
    mock_service_control
        .expect_is_service_process_running()
        .with(eq(1000))
        .times(1)
        .returning(|_| false);

    let mut node = NodeServiceData {
        genesis: false,
        local: false,
        version: "0.98.1".to_string(),
        service_name: "safenode1".to_string(),
        user: "safe".to_string(),
        number: 1,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
        status: ServiceStatus::Running,
        pid: Some(1000),
        listen_addr: None,
        peer_id: Some(PeerId::from_str(
            "12D3KooWS2tpXGGTmg2AHFiDh57yPQnat49YHnyqoggzXZWpqkCR",
        )?),
        log_dir_path: log_dir.to_path_buf(),
        data_dir_path: data_dir.to_path_buf(),
        safenode_path: safenode_bin.to_path_buf(),
        connected_peers: None,
    };

    let result = remove(&mut node, &mock_service_control, false).await;
    match result {
        Ok(_) => panic!("This test should result in an error"),
        Err(e) => assert_eq!(
            "This node was marked as running but it had actually stopped",
            e.to_string()
        ),
    }

    assert_eq!(node.pid, None);
    assert_matches!(node.status, ServiceStatus::Stopped);

    Ok(())
}

#[tokio::test]
async fn remove_should_remove_an_added_node_and_keep_directories() -> Result<()> {
    let temp_dir = assert_fs::TempDir::new()?;
    let log_dir = temp_dir.child("safenode1-logs");
    log_dir.create_dir_all()?;
    let data_dir = temp_dir.child("safenode1-data");
    data_dir.create_dir_all()?;
    let safenode_bin = data_dir.child("safenode");
    safenode_bin.write_binary(b"fake safenode binary")?;

    let mut mock_service_control = MockServiceControl::new();
    mock_service_control
        .expect_uninstall()
        .with(eq("safenode1"))
        .times(1)
        .returning(|_| Ok(()));

    let mut node = NodeServiceData {
        genesis: false,
        local: false,
        version: "0.98.1".to_string(),
        service_name: "safenode1".to_string(),
        user: "safe".to_string(),
        number: 1,
        rpc_socket_addr: SocketAddr::new(IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1)), 8081),
        status: ServiceStatus::Stopped,
        pid: None,
        peer_id: None,
        listen_addr: None,
        log_dir_path: log_dir.to_path_buf(),
        data_dir_path: data_dir.to_path_buf(),
        safenode_path: safenode_bin.to_path_buf(),
        connected_peers: None,
    };

    remove(&mut node, &mock_service_control, true).await?;

    assert_eq!(node.data_dir_path, data_dir.to_path_buf());
    assert_eq!(node.log_dir_path, log_dir.to_path_buf());
    assert_matches!(node.status, ServiceStatus::Removed);

    log_dir.assert(predicate::path::is_dir());
    data_dir.assert(predicate::path::is_dir());

    Ok(())
}
