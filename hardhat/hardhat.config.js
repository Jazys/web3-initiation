// ethers plugin required to interact with the contract
require('@nomiclabs/hardhat-ethers');
require("hardhat-etherscan-abi");

// private key from the pre-funded Moonbase Alpha testing account
const { privateKey } = require('./secrets.json');
const { etherscanApi } = require('./etherscanApi.json');
const { alchemyKey } = require('./alchemykey.json');

module.exports = {

  paths: {
    sources: "./contracts",
    tests: "./test2",
    cache: "./cache",
    artifacts: "./artifacts"
  },
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
      //url: 'http://185.189.156.201:9933',
      url: 'https://moon-rpc.nuage.omvpb.ovh',
      chainId: 1281, // 0x507 in hex,
      accounts: [privateKey]
    },

    hardhat: {
        chainId: 1,
        forking: {
          url: "https://eth-mainnet.alchemyapi.io/v2/"+alchemyKey,
          blockNumber:13308800
       },
    }
  },

  etherscan: {
    apiKey: etherscanApi
  },

};