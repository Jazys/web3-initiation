// ethers plugin required to interact with the contract
require('@nomiclabs/hardhat-ethers');

// private key from the pre-funded Moonbase Alpha testing account
const { privateKey } = require('./secrets.json');

module.exports = {
  // latest Solidity version
  solidity: {
    compilers: [
        {
            version: "0.8.1"
        },
        {
            version: "0.7.0"
        }
      ]
  },

  networks: {
    // Moonbase Alpha network specification
    moonbase: {
      url: 'http://185.189.156.201:9933',
      //url: 'https://moon-rpc.nuage.omvpb.ovh',
      chainId: 1281, // 0x507 in hex,
      accounts: [privateKey]
    }
  }
};