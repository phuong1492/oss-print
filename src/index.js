const Web3 = require('web3');

class WalletBalanceChecker {
    constructor(bscRpcUrl, ethRpcUrl) {
        this.bscWeb3 = new Web3(bscRpcUrl);
        this.ethWeb3 = new Web3(ethRpcUrl);
        // Địa chỉ của token trên mạng BSC và Ethereum
        this.tokens = {
            BSC: {
                USDC: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // Ví dụ địa chỉ USDC trên BSC
                USDT: '0x55d398326f99059ff775485246999027b3197955', // Ví dụ địa chỉ USDT trên BSC
                BNB: '0x', // BNB là native coin trên BSC, không cần địa chỉ token
            },
            ETH: {
                USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // Ví dụ địa chỉ USDC trên Ethereum
                USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // Ví dụ địa chỉ USDT trên Ethereum
                ETH: '0x', // ETH là native coin trên Ethereum, không cần địa chỉ token
            }
        };
    }

    async getBalance(walletAddress, token, network = 'BSC') {
        let balance;
        if (network === 'BSC') {
            if (token === 'BNB') {
                balance = await this.bscWeb3.eth.getBalance(walletAddress);
            } else {
                const tokenContract = new this.bscWeb3.eth.Contract([
                    { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "type": "function" }
                ], this.tokens.BSC[token]);
                balance = await tokenContract.methods.balanceOf(walletAddress).call();
            }
        } else if (network === 'ETH') {
            if (token === 'ETH') {
                balance = await this.ethWeb3.eth.getBalance(walletAddress);
            } else {
                const tokenContract = new this.ethWeb3.eth.Contract([
                    { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "type": "function" }
                ], this.tokens.ETH[token]);
                balance = await tokenContract.methods.balanceOf(walletAddress).call();
            }
        }
        return this.web3.utils.fromWei(balance, 'ether');
    }
}

module.exports = WalletBalanceChecker;