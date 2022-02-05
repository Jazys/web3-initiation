// ethers plugin required to interact with the contract
require('@nomiclabs/hardhat-ethers');

// private key from the pre-funded Moonbase Alpha testing account
const { privateKey } = require('./secrets.json');

module.exports = {
  // latest Solidity version
  solidity: "0.8.1",

  networks: {
    // Moonbase Alpha network specification
    moonbase: {
      url: 'http://185.189.157.205:9933',
      chainId: 1281, // 0x507 in hex,
      accounts: [privateKey]
    }
  }
};