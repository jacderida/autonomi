use crate::client::{
    chunk::DataMapChunk,
    files::{archive_private::PrivateArchiveAccess, archive_public::ArchiveAddr},
    payment::PaymentOption,
    vault::{UserData, VaultSecretKey},
    Client,
};
use crate::{Bytes, Network, Wallet};
use ant_protocol::storage::{ChunkAddress, Pointer, PointerAddress, PointerTarget};
use bls::{PublicKey, SecretKey};
use pyo3::exceptions::{PyConnectionError, PyRuntimeError, PyValueError};
use pyo3::prelude::*;
use pyo3_async_runtimes::tokio::future_into_py;
use xor_name::XorName;

#[pyclass(name = "Client")]
pub(crate) struct PyClient {
    inner: Client,
}

#[pymethods]
impl PyClient {
    #[staticmethod]
    fn init(py: Python) -> PyResult<Bound<PyAny>> {
        future_into_py(py, async {
            let inner = Client::init()
                .await
                .map_err(|e| PyConnectionError::new_err(format!("Failed to connect: {e}")))?;
            Ok(PyClient { inner })
        })
    }

    #[staticmethod]
    fn init_local(py: Python) -> PyResult<Bound<PyAny>> {
        future_into_py(py, async {
            let inner = Client::init_local()
                .await
                .map_err(|e| PyConnectionError::new_err(format!("Failed to connect: {e}")))?;
            Ok(PyClient { inner })
        })
    }

    fn data_put<'a>(
        &self,
        py: Python<'a>,
        data: Vec<u8>,
        payment: &PyPaymentOption,
    ) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let payment = payment.inner.clone();
        future_into_py(py, async move {
            match client.data_put(Bytes::from(data), payment).await {
                Ok(access) => Ok(PyDataMapChunk { inner: access }),
                Err(e) => Err(PyRuntimeError::new_err(format!("Failed to put data: {e}"))),
            }
        })
    }

    fn data_get<'a>(&self, py: Python<'a>, access: &PyDataMapChunk) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let access = access.inner.clone();

        future_into_py(py, async move {
            match client.data_get(access).await {
                Ok(data) => Ok(data.to_vec()),
                Err(e) => Err(PyRuntimeError::new_err(format!("Failed to get data: {e}"))),
            }
        })
    }

    fn data_put_public<'a>(
        &self,
        py: Python<'a>,
        data: Vec<u8>,
        payment: &PyPaymentOption,
    ) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let payment = payment.inner.clone();

        future_into_py(py, async move {
            match client
                .data_put_public(bytes::Bytes::from(data), payment)
                .await
            {
                Ok(addr) => Ok(crate::client::address::addr_to_str(addr)),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to put data: {:?}",
                    eyre::Report::from(e)
                ))),
            }
        })
    }

    fn data_get_public<'a>(&self, py: Python<'a>, addr: &str) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let addr = crate::client::address::str_to_addr(addr)
            .map_err(|e| PyValueError::new_err(format!("`addr` has invalid format: {e:?}")))?;

        future_into_py(py, async move {
            match client.data_get_public(addr).await {
                Ok(data) => Ok(data.to_vec()),
                Err(e) => Err(PyRuntimeError::new_err(format!("Failed to put data: {e}"))),
            }
        })
    }

    fn vault_cost<'a>(
        &self,
        py: Python<'a>,
        key: &PyVaultSecretKey,
        max_expected_size: u64,
    ) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let key = key.inner.clone();

        future_into_py(py, async move {
            match client.vault_cost(&key, max_expected_size).await {
                Ok(cost) => Ok(cost.to_string()),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to get vault cost: {e}"
                ))),
            }
        })
    }

    fn write_bytes_to_vault<'a>(
        &self,
        py: Python<'a>,
        data: Vec<u8>,
        payment: &PyPaymentOption,
        key: &PyVaultSecretKey,
        content_type: u64,
    ) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let payment = payment.inner.clone();
        let key = key.inner.clone();

        future_into_py(py, async move {
            match client
                .write_bytes_to_vault(bytes::Bytes::from(data), payment, &key, content_type)
                .await
            {
                Ok(cost) => Ok(cost.to_string()),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to write to vault: {e}"
                ))),
            }
        })
    }

    fn fetch_and_decrypt_vault<'a>(
        &self,
        py: Python<'a>,
        key: &PyVaultSecretKey,
    ) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let key = key.inner.clone();

        future_into_py(py, async move {
            match client.fetch_and_decrypt_vault(&key).await {
                Ok((data, content_type)) => Ok((data.to_vec(), content_type)),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to fetch vault: {e}"
                ))),
            }
        })
    }

    fn get_user_data_from_vault<'a>(
        &self,
        py: Python<'a>,
        key: &PyVaultSecretKey,
    ) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let key = key.inner.clone();

        future_into_py(py, async move {
            match client.get_user_data_from_vault(&key).await {
                Ok(user_data) => Ok(PyUserData { inner: user_data }),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to get user data from vault: {e}"
                ))),
            }
        })
    }

    fn put_user_data_to_vault<'a>(
        &self,
        py: Python<'a>,
        key: &PyVaultSecretKey,
        payment: &PyPaymentOption,
        user_data: &PyUserData,
    ) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let key = key.inner.clone();
        let payment = payment.inner.clone();
        let user_data = user_data.inner.clone();

        future_into_py(py, async move {
            match client
                .put_user_data_to_vault(&key, payment, user_data)
                .await
            {
                Ok(_) => Ok(()),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to put user data: {e}"
                ))),
            }
        })
    }

    fn pointer_get<'a>(
        &self,
        py: Python<'a>,
        addr: PyPointerAddress,
    ) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();

        future_into_py(py, async move {
            match client.pointer_get(addr.inner).await {
                Ok(pointer) => Ok(PyPointer { inner: pointer }),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to get pointer: {e}"
                ))),
            }
        })
    }

    fn pointer_put<'a>(
        &self,
        py: Python<'a>,
        pointer: &PyPointer,
        payment_option: &PyPaymentOption,
    ) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let pointer = pointer.inner.clone();
        let payment = payment_option.inner.clone();

        future_into_py(py, async move {
            let (_cost, addr) = client
                .pointer_put(pointer, payment)
                .await
                .map_err(|e| PyRuntimeError::new_err(format!("Failed to put pointer: {e}")))?;
            Ok(PyPointerAddress { inner: addr })
        })
    }

    fn pointer_cost<'a>(&self, py: Python<'a>, key: &PyPublicKey) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        let key = key.inner;

        future_into_py(py, async move {
            match client.pointer_cost(key).await {
                Ok(cost) => Ok(cost.to_string()),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to get pointer cost: {e}"
                ))),
            }
        })
    }
}

#[pyclass(name = "PointerAddress")]
#[derive(Debug, Clone)]
pub struct PyPointerAddress {
    inner: PointerAddress,
}

#[pymethods]
impl PyPointerAddress {
    #[new]
    pub fn new(hex_str: String) -> PyResult<Self> {
        let bytes = hex::decode(&hex_str)
            .map_err(|e| PyValueError::new_err(format!("`hex_str` is invalid: {e:?}")))?;
        let xorname = XorName::from_content(&bytes);

        Ok(Self {
            inner: PointerAddress::new(xorname),
        })
    }

    #[getter]
    pub fn hex(&self) -> String {
        let bytes: [u8; 32] = self.inner.xorname().0;
        hex::encode(bytes)
    }
}

#[pyclass(name = "Pointer")]
#[derive(Debug, Clone)]
pub struct PyPointer {
    inner: Pointer,
}

#[pymethods]
impl PyPointer {
    #[new]
    pub fn new(key: &PySecretKey, counter: u32, target: &PyPointerTarget) -> PyResult<Self> {
        Ok(Self {
            inner: Pointer::new(&key.inner, counter, target.inner.clone()),
        })
    }

    pub fn network_address(&self) -> PyPointerAddress {
        PyPointerAddress {
            inner: self.inner.network_address(),
        }
    }

    #[getter]
    fn hex(&self) -> String {
        let bytes: [u8; 32] = self.inner.xorname().0;
        hex::encode(bytes)
    }

    #[getter]
    fn target(&self) -> PyPointerTarget {
        PyPointerTarget {
            inner: PointerTarget::ChunkAddress(ChunkAddress::new(self.inner.xorname())),
        }
    }
}

#[pyclass(name = "PointerTarget")]
#[derive(Debug, Clone)]
pub struct PyPointerTarget {
    inner: PointerTarget,
}

#[pymethods]
impl PyPointerTarget {
    #[new]
    fn new(xorname: &[u8]) -> PyResult<Self> {
        Ok(Self {
            inner: PointerTarget::ChunkAddress(ChunkAddress::new(XorName::from_content(xorname))),
        })
    }

    #[getter]
    fn hex(&self) -> String {
        let bytes: [u8; 32] = self.inner.xorname().0;
        hex::encode(bytes)
    }

    #[getter]
    fn target(&self) -> PyPointerTarget {
        PyPointerTarget {
            inner: PointerTarget::ChunkAddress(ChunkAddress::new(self.inner.xorname())),
        }
    }

    #[staticmethod]
    fn from_xorname(xorname: &[u8]) -> PyResult<Self> {
        Ok(Self {
            inner: PointerTarget::ChunkAddress(ChunkAddress::new(XorName::from_content(xorname))),
        })
    }

    #[staticmethod]
    fn from_chunk_address(addr: &PyChunkAddress) -> Self {
        Self {
            inner: PointerTarget::ChunkAddress(addr.inner),
        }
    }
}

#[pyclass(name = "ChunkAddress")]
#[derive(Debug, Clone)]
pub struct PyChunkAddress {
    inner: ChunkAddress,
}

impl From<ChunkAddress> for PyChunkAddress {
    fn from(addr: ChunkAddress) -> Self {
        Self { inner: addr }
    }
}

impl From<PyChunkAddress> for ChunkAddress {
    fn from(addr: PyChunkAddress) -> Self {
        addr.inner
    }
}

#[pymethods]
impl PyChunkAddress {
    #[new]
    fn new(addr: &str) -> PyResult<Self> {
        let addr = crate::client::address::str_to_addr(addr)
            .map_err(|e| PyValueError::new_err(format!("`addr` has invalid format: {e:?}")))?;

        Ok(Self {
            inner: ChunkAddress::new(addr),
        })
    }

    #[getter]
    fn hex(&self) -> String {
        let bytes: [u8; 32] = self.inner.xorname().0;
        hex::encode(bytes)
    }

    #[staticmethod]
    fn from_chunk_address(addr: &str) -> PyResult<Self> {
        let bytes =
            hex::decode(addr).map_err(|e| PyValueError::new_err(format!("`addr` invalid: {e}")))?;

        if bytes.len() != 32 {
            return Err(PyValueError::new_err("`addr` invalid: must be 32 bytes"));
        }

        let mut xorname = [0u8; 32];
        xorname.copy_from_slice(&bytes);

        Ok(Self {
            inner: ChunkAddress::new(XorName(xorname)),
        })
    }

    fn __str__(&self) -> PyResult<String> {
        Ok(self.hex())
    }

    fn __repr__(&self) -> PyResult<String> {
        Ok(format!("ChunkAddress({})", self.hex()))
    }
}

#[pyclass(name = "Wallet")]
pub struct PyWallet {
    pub(crate) inner: Wallet,
}

#[pymethods]
impl PyWallet {
    #[new]
    fn new(private_key: String) -> PyResult<Self> {
        let wallet = Wallet::new_from_private_key(
            Network::ArbitrumOne, // TODO: Make this configurable
            &private_key,
        )
        .map_err(|e| PyValueError::new_err(format!("`private_key` invalid: {e}")))?;

        Ok(Self { inner: wallet })
    }

    #[staticmethod]
    fn new_from_private_key(network: PyNetwork, private_key: &str) -> PyResult<Self> {
        let inner = Wallet::new_from_private_key(network.inner, private_key)
            .map_err(|e| PyValueError::new_err(format!("`private_key` invalid: {e}")))?;

        Ok(Self { inner })
    }

    fn address(&self) -> String {
        format!("{:?}", self.inner.address())
    }

    fn balance<'a>(&self, py: Python<'a>) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        future_into_py(py, async move {
            match client.balance_of_tokens().await {
                Ok(balance) => Ok(balance.to_string()),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to get balance: {e}"
                ))),
            }
        })
    }

    fn balance_of_gas<'a>(&self, py: Python<'a>) -> PyResult<Bound<'a, PyAny>> {
        let client = self.inner.clone();
        future_into_py(py, async move {
            match client.balance_of_gas_tokens().await {
                Ok(balance) => Ok(balance.to_string()),
                Err(e) => Err(PyRuntimeError::new_err(format!(
                    "Failed to get balance: {e}"
                ))),
            }
        })
    }
}

#[pyclass(name = "PaymentOption")]
pub struct PyPaymentOption {
    pub(crate) inner: PaymentOption,
}

#[pymethods]
impl PyPaymentOption {
    #[staticmethod]
    fn wallet(wallet: &PyWallet) -> Self {
        Self {
            inner: PaymentOption::Wallet(wallet.inner.clone()),
        }
    }
}

#[pyclass(name = "SecretKey")]
#[derive(Debug, Clone)]
pub struct PySecretKey {
    inner: SecretKey,
}

#[pymethods]
impl PySecretKey {
    #[new]
    fn new() -> PyResult<Self> {
        Ok(Self {
            inner: SecretKey::random(),
        })
    }

    #[staticmethod]
    fn from_hex(hex_str: &str) -> PyResult<Self> {
        SecretKey::from_hex(hex_str)
            .map(|key| Self { inner: key })
            .map_err(|e| PyValueError::new_err(format!("Invalid hex key: {e}")))
    }

    fn public_key(&self) -> PyPublicKey {
        PyPublicKey {
            inner: self.inner.public_key(),
        }
    }

    fn to_hex(&self) -> String {
        self.inner.to_hex()
    }
}

#[pyclass(name = "PublicKey")]
#[derive(Debug, Clone)]
pub struct PyPublicKey {
    inner: PublicKey,
}

#[pymethods]
impl PyPublicKey {
    #[new]
    fn new() -> PyResult<Self> {
        let secret = SecretKey::random();
        Ok(Self {
            inner: secret.public_key(),
        })
    }

    #[staticmethod]
    fn from_hex(hex_str: &str) -> PyResult<Self> {
        PublicKey::from_hex(hex_str)
            .map(|key| Self { inner: key })
            .map_err(|e| PyValueError::new_err(format!("Invalid hex key: {e}")))
    }

    fn to_hex(&self) -> String {
        self.inner.to_hex()
    }
}

#[pyclass(name = "VaultSecretKey")]
#[derive(Debug, Clone)]
pub struct PyVaultSecretKey {
    inner: VaultSecretKey,
}

#[pymethods]
impl PyVaultSecretKey {
    #[new]
    fn new() -> PyResult<Self> {
        Ok(Self {
            inner: VaultSecretKey::random(),
        })
    }

    #[staticmethod]
    fn from_hex(hex_str: &str) -> PyResult<Self> {
        VaultSecretKey::from_hex(hex_str)
            .map(|key| Self { inner: key })
            .map_err(|e| PyValueError::new_err(format!("Invalid hex key: {e}")))
    }

    fn to_hex(&self) -> String {
        self.inner.to_hex()
    }
}

#[pyclass(name = "UserData")]
#[derive(Debug, Clone)]
pub struct PyUserData {
    inner: UserData,
}

#[pymethods]
impl PyUserData {
    #[new]
    fn new() -> Self {
        Self {
            inner: UserData::new(),
        }
    }

    fn add_file_archive(&mut self, archive: &str) -> Option<String> {
        let name = XorName::from_content(archive.as_bytes());
        let archive_addr = ArchiveAddr::from_content(&name);
        self.inner.add_file_archive(archive_addr)
    }

    fn add_private_file_archive(&mut self, archive: &str) -> Option<String> {
        let name = XorName::from_content(archive.as_bytes());
        let private_access = match PrivateArchiveAccess::from_hex(&name.to_string()) {
            Ok(access) => access,
            Err(_e) => return None,
        };
        self.inner.add_private_file_archive(private_access)
    }

    fn file_archives(&self) -> Vec<(String, String)> {
        self.inner
            .file_archives
            .iter()
            .map(|(addr, name)| (format!("{addr:x}"), name.clone()))
            .collect()
    }

    fn private_file_archives(&self) -> Vec<(String, String)> {
        self.inner
            .private_file_archives
            .iter()
            .map(|(addr, name)| (addr.to_hex(), name.clone()))
            .collect()
    }
}

#[pyclass(name = "DataMapChunk")]
#[derive(Debug, Clone)]
pub struct PyDataMapChunk {
    inner: DataMapChunk,
}

#[pymethods]
impl PyDataMapChunk {
    #[staticmethod]
    fn from_hex(hex: &str) -> PyResult<Self> {
        DataMapChunk::from_hex(hex)
            .map(|access| Self { inner: access })
            .map_err(|e| PyValueError::new_err(format!("Invalid hex: {e}")))
    }

    fn to_hex(&self) -> String {
        self.inner.to_hex()
    }

    fn address(&self) -> String {
        self.inner.address().to_string()
    }
}

#[pyfunction]
fn encrypt(data: Vec<u8>) -> PyResult<(Vec<u8>, Vec<Vec<u8>>)> {
    let (data_map, chunks) = self_encryption::encrypt(Bytes::from(data))
        .map_err(|e| PyRuntimeError::new_err(format!("Encryption failed: {e}")))?;

    let data_map_bytes = rmp_serde::to_vec(&data_map)
        .map_err(|e| PyRuntimeError::new_err(format!("Failed to serialize data map: {e}")))?;

    let chunks_bytes: Vec<Vec<u8>> = chunks
        .into_iter()
        .map(|chunk| chunk.content.to_vec())
        .collect();

    Ok((data_map_bytes, chunks_bytes))
}

#[pyclass(name = "Network")]
#[derive(Debug, Clone)]
pub struct PyNetwork {
    inner: Network,
}

#[pymethods]
impl PyNetwork {
    #[new]
    fn new(local: bool) -> PyResult<Self> {
        let inner = Network::new(local).map_err(|e| PyRuntimeError::new_err(format!("{e:?}")))?;
        Ok(Self { inner })
    }
}

#[pymodule]
#[pyo3(name = "autonomi_client")]
fn autonomi_client_module(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_class::<PyClient>()?;
    m.add_class::<PyWallet>()?;
    m.add_class::<PyPaymentOption>()?;
    m.add_class::<PyVaultSecretKey>()?;
    m.add_class::<PyUserData>()?;
    m.add_class::<PyDataMapChunk>()?;
    m.add_class::<PyPointer>()?;
    m.add_class::<PyPointerAddress>()?;
    m.add_class::<PyPointerTarget>()?;
    m.add_class::<PyChunkAddress>()?;
    m.add_class::<PySecretKey>()?;
    m.add_class::<PyPublicKey>()?;
    m.add_class::<PyNetwork>()?;
    m.add_function(wrap_pyfunction!(encrypt, m)?)?;
    Ok(())
}
