import { ethers } from './ethers-5.1.esm.min.js'

const Artifact={
    "_format": "hh-sol-artifact-1",
    "contractName": "WavePortal",
    "sourceName": "contracts/WavePortal.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "getTotalWaves",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "wave",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5061003c6040518060600160405280602581526020016107206025913961004160201b6101081760201c565b6101c4565b6100dd816040516024016100559190610142565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100e060201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600061011482610164565b61011e818561016f565b935061012e818560208601610180565b610137816101b3565b840191505092915050565b6000602082019050818103600083015261015c8184610109565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561019e578082015181840152602081019050610183565b838111156101ad576000848401525b50505050565b6000601f19601f8301169050919050565b61054d806101d36000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636fe15b441461003b5780639a2cdc0814610045575b600080fd5b610043610063565b005b61004d6100bd565b60405161005a91906103db565b60405180910390f35b60016000808282546100759190610412565b925050819055506100bb6040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336101a1565b565b60006101006040518060400160405280601781526020017f5765206861766520256420746f74616c2077617665732100000000000000000081525060005461023d565b600054905090565b61019e8160405160240161011c9190610359565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b50565b61023982826040516024016101b792919061037b565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b5050565b6102d582826040516024016102539291906103ab565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b61030b81610468565b82525050565b600061031c826103f6565b6103268185610401565b93506103368185602086016104a4565b61033f81610506565b840191505092915050565b6103538161049a565b82525050565b600060208201905081810360008301526103738184610311565b905092915050565b600060408201905081810360008301526103958185610311565b90506103a46020830184610302565b9392505050565b600060408201905081810360008301526103c58185610311565b90506103d4602083018461034a565b9392505050565b60006020820190506103f0600083018461034a565b92915050565b600081519050919050565b600082825260208201905092915050565b600061041d8261049a565b91506104288361049a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561045d5761045c6104d7565b5b828201905092915050565b60006104738261047a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156104c25780820151818401526020810190506104a7565b838111156104d1576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220bca7d6c78ed558447ab8e21bf5fdeb5b2fe5a9eaca155c561afe8e97fff36c7a64736f6c63430008010033596f20796f2c204920616d206120636f6e747261637420616e64204920616d20736d617274",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c80636fe15b441461003b5780639a2cdc0814610045575b600080fd5b610043610063565b005b61004d6100bd565b60405161005a91906103db565b60405180910390f35b60016000808282546100759190610412565b925050819055506100bb6040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336101a1565b565b60006101006040518060400160405280601781526020017f5765206861766520256420746f74616c2077617665732100000000000000000081525060005461023d565b600054905090565b61019e8160405160240161011c9190610359565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b50565b61023982826040516024016101b792919061037b565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b5050565b6102d582826040516024016102539291906103ab565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b61030b81610468565b82525050565b600061031c826103f6565b6103268185610401565b93506103368185602086016104a4565b61033f81610506565b840191505092915050565b6103538161049a565b82525050565b600060208201905081810360008301526103738184610311565b905092915050565b600060408201905081810360008301526103958185610311565b90506103a46020830184610302565b9392505050565b600060408201905081810360008301526103c58185610311565b90506103d4602083018461034a565b9392505050565b60006020820190506103f0600083018461034a565b92915050565b600081519050919050565b600082825260208201905092915050565b600061041d8261049a565b91506104288361049a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561045d5761045c6104d7565b5b828201905092915050565b60006104738261047a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156104c25780820151818401526020810190506104a7565b838111156104d1576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220bca7d6c78ed558447ab8e21bf5fdeb5b2fe5a9eaca155c561afe8e97fff36c7a64736f6c63430008010033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  

const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
const signer = provider.getSigner()

// function to check if metamask is installed
var isMetamaskInstalled = () => ethereum.isMetamaskInstalled

// function to check if metamask is connected to the current chain
var isMetamaskConnected = () => ethereum.isConnected()

// function to enable metamask if its disconnected
// const enableMetamask = async () => {
//     await ethereum.on('connect', (chainId) => {
//         console.log({ chainId })
//         console.log('Metamask Connected:', ethereum.isConnected())
//     })
// }

// function to get metamask chainID
const getChainId = async () => {
    return await ethereum.request({method: 'eth_chainId'})
}

// function to get metamask networkId
const getNetworkId = async () => {
    return await ethereum.request({method: 'net_version'})
}

// function to get metamask account connected with dapp
const getAccount = async () => {
    try {
        let account = await ethereum.request({method: 'eth_accounts'})
        return account
    } catch (error) {
        console.log('Error getting account:\n', error)
        return error
    }
}

// function to request metamask to connect with account
const connectToAccount = async () => {
    try {
        let account = await ethereum.request({method: 'eth_requestAccounts'})
        return account
    } catch (error) {
        console.log('Error connecting to metamask account:\n',error)
        return error
    }
}

// function to get the balance of the connected account
const getBalance = async () => {
    try {
        let account = await getAccount()
        if (account.length === 0) {
            return 'Connect to account first!'
        }
    
        let balance = await signer.getBalance()
        return ethers.utils.formatEther(balance) + ' ETH'
    } catch (error) {
        console.log('Error getting balance:\n',error)
        return error
    }
}

const makeTransaction = async () => {  

    try {
        /*let gasprice= await signer.getGasPrice(); 

        const tx = {
            from: "0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac",
            to: "0x3Cd0A705a2DC65e5b1E1205896BaA2be8A07c6e0",
            value: ethers.utils.parseEther("1.0"),
            nonce: "10",
            gasPrice: gasprice,
          }

          signer.sendTransaction(tx).then((transaction) => {
            console.dir(transaction)
            alert("Send finished!")
          })*/

          let gaspriceVar= await signer.getGasPrice(); 

          console.log(gaspriceVar)

          const transactionParameters = {
            nonce: '0x00', // ignored by MetaMask
            gas: '0x5208', // customizable by user during MetaMask confirmation.
            to: '0x3Cd0A705a2DC65e5b1E1205896BaA2be8A07c6e0', // Required except during contract publications.
            from: ethereum.selectedAddress, // must match user's active address.
            value: '0x29a2241af62c0000'
          };
          
          // txHash is a hex string
          // As with any RPC call, it may throw an error
          const txHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
          });

        return ""
    } catch (error) {
        console.log('Error getting balance:\n',error)
        return error
    }
}


// function to get the balance of the connected account
const getContractInfo = async () => {
    try {
        const contract = new ethers.Contract(
            "0xc01Ee7f10EA4aF4673cFff62710E1D7792aBa8f3",
            Artifact.abi,
            signer
        );

       

        console.log(contract);

        console.log(await contract.wave());

        console.log(await contract.getTotalWaves());
        
        return ""
    } catch (error) {
        console.log('Error getting balance:\n',error)
        return error
    }
}
export default {
    signer,
    isMetamaskInstalled,
    isMetamaskConnected,
    getChainId,
    getNetworkId,
    getAccount,
    connectToAccount,
    getBalance,
    makeTransaction,
    getContractInfo
}