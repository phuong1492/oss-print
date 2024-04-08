## Wallet Balance Print
The Wallet Balance Checker is a Node.js library designed for easily checking the balances of USDC, USDT, ETH, and BNB tokens in a wallet on both the Binance Smart Chain (BSC) and Ethereum (ETH) networks. It utilizes the power of web3.js to interact with blockchain networks.

### Getting Started
####  Prerequisites
Node.js and npm must be installed on your machine.

Access to BSC and Ethereum network RPC URLs.

####  Installation

Install the library from npm by running:

```
npm install wallet-balance-checker-lib
```

Or if you prefer using yarn:

```
yarn add wallet-balance-checker-lib
```

#### Usage
To use the Wallet Balance Checker, you'll first need to require it in your Node.js application and configure it with your BSC and Ethereum RPC URLs.

Importing the Library
```
const WalletBalanceChecker = require('wallet-balance-checker-lib');
```

Initializing the Library

Create an instance of the Wallet Balance Checker with the RPC URLs:

```
const bscRpcUrl = 'https://bsc-dataseed.binance.org/';
const ethRpcUrl = 'https://mainnet.infura.io/v3/your-infura-project-id';
const checker = new WalletBalanceChecker(bscRpcUrl, ethRpcUrl);
```

#### Checking Token Balances
You can check the balance of a supported token by using the getBalance method. Specify the wallet address, token symbol, and network:

```
const walletAddress = '0x...'; // Replace with the actual wallet address

// Check BNB balance on BSC
checker.getBalance(walletAddress, 'BNB', 'BSC').then(balance => {
    console.log(`BNB Balance on BSC: ${balance}`);
});

// Check USDC balance on Ethereum
checker.getBalance(walletAddress, 'USDC', 'ETH').then(balance => {
    console.log(`USDC Balance on Ethereum: ${balance}`);
});
```

#### Supported Tokens
The library currently supports checking the balance of the following tokens:

BSC Network: BNB, USDC, USDT
Ethereum Network: ETH, USDC, USDT
Contributions
Feel free to contribute to the library by submitting pull requests or opening issues for bugs and feature requests.

#### License
This project is licensed under the MIT License. See the LICENSE file for details.