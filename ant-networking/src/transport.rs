// Copyright 2024 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under The General Public License (GPL), version 3.
// Unless required by applicable law or agreed to in writing, the SAFE Network Software distributed
// under the GPL Licence is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied. Please review the Licences for the specific language governing
// permissions and limitations relating to use of the SAFE Network Software.

#[cfg(feature = "open-metrics")]
use crate::MetricsRegistries;
use libp2p::{
    core::{muxing::StreamMuxerBox, transport},
    identity::Keypair,
    PeerId, Transport as _,
};

pub(crate) fn build_transport(
    keypair: &Keypair,
    #[cfg(feature = "open-metrics")] registries: &mut MetricsRegistries,
) -> transport::Boxed<(PeerId, StreamMuxerBox)> {
    let trans = generate_quic_transport(keypair);
    #[cfg(feature = "open-metrics")]
    let trans = libp2p::metrics::BandwidthTransport::new(trans, &mut registries.standard_metrics);

    let trans = trans.map(|(peer_id, muxer), _| (peer_id, StreamMuxerBox::new(muxer)));

    trans.boxed()
}

fn generate_quic_transport(
    keypair: &Keypair,
) -> libp2p::quic::GenTransport<libp2p::quic::tokio::Provider> {
    libp2p::quic::tokio::Transport::new(libp2p::quic::Config::new(keypair))
}
