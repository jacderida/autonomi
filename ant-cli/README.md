# CLI for the Autonomi Network

## Usage
```
ant [OPTIONS] <COMMAND>
```
### Options
- `--log-output-dest <LOG_OUTPUT_DEST>`: Specify the logging output destination. [default: data-dir]
- `--log-format <LOG_FORMAT>`: Specify the logging format.
- `--peer <multiaddr>`: Peer(s) to use for bootstrap, in a 'multiaddr' format containing the peer ID [env: ANT_PEERS=]
- `--timeout <CONNECTION_TIMEOUT>`: The maximum duration to wait for a connection to the network before timing out
- `-x, --no-verify`: Prevent verification of data storage on the network
- `-h, --help`: Print help (see more with '--help')
- `-V, --version`: Print version

## Commands

### File
- `file cost <file>`
- `file upload <file> [--public] [--no-archive] [--retry-failed 3]`
- `file download <addr> <dest_file>`
- `file list`

[Reference : File](#file-operations)

### Register
- `register generate-key [--overwrite]`
- `register cost <name>`
- `register create <name> <value>`
- `register edit [--name] <address> <value>`
- `register get [--name] <address>`
- `register list`

[Reference : Register](#register-operations)

### Vault
- `vault cost`
- `vault create`
- `vault load`
- `vault sync [--force]`

[Reference : Vault](#vault-operations)

### Scratchpad
- `scratchpad generate-key [--overwrite]`
- `scratchpad cost <name>`
- `scratchpad create <name> <data> [--max-fee-per-gas <value>]`
- `scratchpad share <name>`
- `scratchpad get <name> [--secret-key] [--hex]`
- `scratchpad edit <name> <data> [--secret-key]`
- `scratchpad list`

[Reference : Scratchpad](#scratchpad-operations)

### Wallet
- `wallet create [--no-password] [--password <password>]`
- `wallet import <private_key> [--no-password] [--password <password>]`
- `wallet balance`
- `wallet export`

[Reference : Wallet](#wallet-operations)

## Analyze
- `analyze <address>`

[Reference : Analyze](#analyze-operations)

### Help
- `help`
- `help <COMMAND>`


## Installation
You can install the Autonomi CLI in two ways: by directly downloading the binary from GitHub or by building it from source using a terminal.

### Option 1: Downloading the Binary from GitHub

1. Go to the [Releases](https://github.com/maidsafe/autonomi/releases) page on GitHub.
2. Download the latest release for your operating system.
3. Extract the downloaded archive.
4. Move the binary to a directory included in your system's PATH.

### Option 2: Build locally

1. Ensure you have Rust and Cargo installed on your machine. You can download them from rust-lang.org
2. Clone the repository
```
git clone https://github.com/maidsafe/autonomi.git
cd autonomi
```
3. Build the CLI:
```
cargo build --release --bin=ant
```
4. Add the CLI to your PATH / Environment Variables
#### Windows (PowerShell)
```powershell
$env:PATH += ";C:\path\to\your\binary"
[System.Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\path\to\your\binary", [System.EnvironmentVariableTarget]::User)
```

#### macOS and Linux (Bash)
```bash
export PATH=$PATH:/path/to/your/binary
echo 'export PATH=$PATH:/path/to/your/binary' >> ~/.bashrc
source ~/.bashrc
```

## Options

### Specify the logging output destination.
```
--log-output-dest <LOG_OUTPUT_DEST>
```

Default value: `data-dir`\
Valid values: [`stdout` , `data-dir` , <custom path\>]

The data directory location is platform specific:
| OS  | Path |
| ------------- |:-------------:|
| Linux | $HOME/.local/share/autonomi/client/logs |
| macOS | $HOME/Library/Application Support/autonomi/client/logs |
| Windows | %AppData%\autonomi\client\logs |

### Specify the logging format.
```
--log-format <LOG_FORMAT>
```   
Valid values [`default` , `json`]

If the argument is not used, the default format will be applied.

### Specify the Connection Timeout
```
--timeout <CONNECTION_TIMEOUT>
```  

Default value: `120`\
Valid values: [`0 - 999`]

The maximum duration to wait for a connection to the network before timing out.\
This value is expressed in seconds.

### Prevent verification of data storage on the network.
```
-x, --no-verify
```  
This may increase operation speed, but offers no guarantees that operations were successful.

## Reference

### File Operations

#### Get a cost estimate for storing a file
```
file cost <file>
```

Gets a cost estimate for uploading a file to the network.
This returns both the storage costs and gas fees for the file.

Expected value: 
- `<file>`: File path (accessible by current user)


#### Upload a file
```
file upload <file> [--public] [--no-archive] [--retry-failed 3]
```
Uploads a file to the network.

Expected value: 
- `<file>`: File path (accessible by current user)

The following flags can be added:
- `--public` (Optional) Specifying this will make this file publicly available to anyone on the network
- `--no-archive` (Optional) Skip creating local archive after upload. Only upload files without saving archive information. Note that --no-archive is the default behaviour for single file uploads (folk can still upload a single file as an archive by putting it in a directory)
- `--retry-failed` (Optional) Automatically retry failed uploads. This is particularly useful for handling gas fee errors when the network base fee exceeds your --max-fee-per-gas setting. The retry mechanism works at the batch level, so only failed chunks are retried, not the entire file upload process. Being the `times` of the original chunks, default is `0` for not carrying out retry.

Example usage with retry functionality:
```
ant file upload myfile.txt --public --retry-failed 3 --max-fee-per-gas 10000000
```
This will upload the file publicly and automatically retry if the base fee is higher than arbitrums minimum gas fee, showing detailed error messages with current gas prices. Using these settings ensures your data goes up at minimum cost (but depending on current blockchain fees and the amount of data this might take a while)

#### Download a file
```
file download <addr> <dest_path>
```
Download a file from network address to output path

Expected values: 
- `<addr>`: The network address of a file
- `<dest_path>`: The output path to download the file to


#### List the files in a vault
```
file list
```
Lists all files (both public and private) in a vault.


### Register Operations

#### Generate a key for a register
```
register generate-key [--overwrite]
```
Generate a new register key

The following flag can be applied:
`--overwrite` (Optional) Adding this flag will overwrite any existing key, and result in loss of access to any existing registers created using that key


#### Get a cost estimate for storing a register on the network
```
register cost <name>
```
Gets a cost estimate for storing a register on the network.
This returns both the storage costs and gas fees.

#### Create a new register and upload to the network
```
register create <name> <value>
```
Create a new register with the given name and value.
Note: that anyone with the register address can read its value.

Expected values: 
- `<name>`: The name of the register
- `<value>`: The value to store in the register

#### Edit an existing register
```
register edit [--name] <address> <value>
```
Edit an existing register

Expected values: 
- `<address>`: The address of the register to edit
- `<value>`: The new value to store in the register

The following flag can be applied:
`--name`:bool (Optional) Adding this flag will use the name of the register instead of the address
Note: that only the owner of the register can use this shorthand as the address can be generated from the name and register key.

#### Get a register
```
register get [--name] <address>
```
Get a register from the network

Expected values: 
- `<address>`: The address of the register

The following flag can be applied:
`--name`:bool (Optional) Adding this flag will use the name of the register instead of the address
Note: that only the owner of the register can use this shorthand as the address can be generated from the name and register key.

#### List registers
```
register list
```
List local registers


### Vault Operations

#### Get a cost estimate for storing a vault on the network
```
vault cost
```
Gets a cost estimate for uploading a vault to the network.
This returns both the storage costs and gas fees for the vault.

#### Create a new vault and upload to the network
```
vault create
```
Creates a new vault and uploads it to the network.
This will initialise a new vault in the local storage and then upload it to the network.

#### Load vault from the network
```
vault load
```
Retrieves data from the network and writes it to local storage.
This will download the vault data from the network and synchronise it with the local storage.

#### Sync local data with the network
```
vault sync [--force]
```
Sync the users local data with the network vault data.

The following flag can be applied:
`--force` (Optional) Add this flag to overwrite data in the vault with local user data

### Wallet Operations
#### Create a new wallet
```
wallet create [--no-password] 
```

You will be prompted for an optional password, ignoring this will not encrypt the wallet.
This will output the private key for the wallet, the public key for the wallet, and the stored location on device.

The following flags can be used to explictly include or exclude encryption of the created wallet

`--no-password` (Optional) Add this flag to skip the password prompt and encryption step. \
`--password <password>` (Optional) Add this flag to encrypt the create wallet

Note on wallet security
Encrypted wallets provide an additional layer of security, requiring a password to read the private key and perform transactions. However, ensure you remember your password; losing it may result in the inability to access your encrypted wallet.

#### Imports an existing wallet from a private key
```
wallet import <private_key>
```

The following flags can be used to explictly include or exclude encryption of the imported wallet

`--no-password` (Optional) Add this flag to skip the password prompt and encryption step. \
`--password <password>` (Optional) Add this flag to encrypt the create wallet


#### Displays the wallet balance
```
wallet balance
```
This will display both the token and gas balances.

#### Display the wallet details
```
wallet export
```
This will display both the address and private key of the wallet.

### Analyze Operations

Analyze an address to get the address type, and visualize the content.

```
analyze <address>
```

### Scratchpad Operations

#### Generate a new scratchpad key
```
scratchpad generate-key [--overwrite]
```
Generate a new general scratchpad key from which all your scratchpad keys can be derived.

The following flag can be applied:
`--overwrite` (Optional) Warning: overwriting the existing key will result in loss of access to any existing scratchpads

#### Get a cost estimate for creating a scratchpad
```
scratchpad cost <name>
```
Gets a cost estimate for creating a scratchpad on the network.

Expected values:
- `<name>`: The name of the scratchpad

#### Create a new scratchpad
```
scratchpad create <name> <data> [--max-fee-per-gas <value>]
```
Create a new scratchpad with the given name and data.

Expected values:
- `<name>`: The name of the scratchpad
- `<data>`: The data to store in the scratchpad (Up to 4MB)

The following flag can be applied:
`--max-fee-per-gas <value>` (Optional) Specify the maximum fee per gas

#### Share a scratchpad
```
scratchpad share <name>
```
Share a scratchpad secret key with someone else. Sharing this key means that the other party will have permanent read and write access to the scratchpad.

Expected values:
- `<name>`: The name of the scratchpad

#### Get a scratchpad
```
scratchpad get <name> [--secret-key] [--hex]
```
Get the contents of an existing scratchpad from the network.

Expected values:
- `<name>`: The name of the scratchpad

The following flags can be applied:
`--secret-key` (Optional) Indicate that this is an external scratchpad secret key (Use when interacting with a shared scratchpad)
`--hex` (Optional) Display the data as a hex string instead of raw bytes

#### Edit a scratchpad
```
scratchpad edit <name> <data> [--secret-key]
```
Edit the contents of an existing scratchpad.

Expected values:
- `<name>`: The name of the scratchpad
- `<data>`: The new data to store in the scratchpad (Up to 4MB)

The following flag can be applied:
`--secret-key` (Optional) Indicate that this is an external scratchpad secret key (Use when interacting with a shared scratchpad)

#### List scratchpads
```
scratchpad list
```
List owned scratchpads.

## Error Handling
If you encounter any errors while using the CLI, you can use the `--log-output-dest` and `--log-format` options to specify logging details. This can help with debugging and understanding the behavior of the CLI.

## License
This Autonomi Network repository is licensed under the General Public License (GPL), version 3 ([LICENSE](http://www.gnu.org/licenses/gpl-3.0.en.html)).

## Contributing
Contributions are welcome! Please read the [CONTRIBUTING.md](https://github.com/maidsafe/autonomi/blob/main/CONTRIBUTING.md) file for guidelines on how to contribute to this project.
