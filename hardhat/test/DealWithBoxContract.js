var ethers = require('ethers');  
var crypto = require('crypto');

let customCreateWallet;
let customWalletWithOnProvider;
let aThirdWallet;
let existingWallet;
let currentContract;
let currentProvider;
const privateKeyExistingWallet= "0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133";

async function main() {
    currentProvider = ethers.getDefaultProvider('https://moon-rpc.nuage.omvpb.ovh')  

    let privateKeyCreatedWallet= await createWallet();

    customCreateWallet = await connectWallet(privateKeyCreatedWallet);
    existingWallet = await connectWallet(privateKeyExistingWallet);
    aThirdWallet= await connectWallet("0x53ba110598db74fb5c70c6a0c8176adf200ddfee8da0a3f247820925ea3411ad")

    await makeTranserBetweenAccount(customCreateWallet.address, existingWallet);
    await makeTranserBetweenAccount("0xcbEA682da322BEd4f502ad6f6B4143ce2fC33Be3", existingWallet);

    await connectToAContract();

    await callReadContractFunction();

    //await callSetContractFunction("store", existingWallet);
    await callSetContractFunction("reset", customCreateWallet);

    await doSignMessage("test",existingWallet );

}

async function createWallet(){
    var id = crypto.randomBytes(32).toString('hex');
    var privateKey = "0x"+id;
    console.log("Private key created wallet", privateKey);

    customCreateWallet = new ethers.Wallet(privateKey);
    console.log("Address of created wallet: " + customCreateWallet.address);

    return privateKey
}

async function connectWallet(privateKey){
    
    let wallet = new ethers.Wallet(privateKey, currentProvider);

    let balancePromise =await  wallet.getBalance();
    console.log("Balance of wallet "+wallet.address+" = "+ balancePromise) 

    let transactionCountPromise =await  wallet.getTransactionCount();
    console.log("Number Transaction of wallet "+wallet.address+" = "+ transactionCountPromise) 

    return wallet
}

async function connectToAContract(){
    // You can also use an ENS name for the contract address
    //const contractAddress = '0x21cb3940e6Ba5284E1750F1109131a8E8062b9f1'
    const contractAddress ="0x8A9FbFC45cCaF6d9480a3D5354d3D4d930ECfe01";
    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    const contractAbi = [
    // Some details about the token
    'function store(uint256 newValue) public',
    'function retrieve() public view returns (uint256)',
    'event ValueChanged(uint256 newValue)',
    'function reset() public'
    ]
    // The Contract object
    
    currentContract = new ethers.Contract(contractAddress, contractAbi, currentProvider);
    currentContract.on('ValueChanged', (tokenId) => {
        console.log(`Token #${tokenId} minted`)
    })

    const gasPrice = await currentProvider.getGasPrice();
    console.log(`Current gasPrice on Provider `+ gasPrice);
}

async function makeTranserBetweenAccount(adressTo, walletFrom){

    const tx = {
        from: walletFrom.address,
        to: adressTo,
        value: ethers.utils.parseEther("1"),
        nonce: walletFrom.getTransactionCount(),
        gasLimit: ethers.utils.hexlify(2000000), // 100000
        gasPrice: await currentProvider.getGasPrice(),
      }

     
      await walletFrom.signTransaction(tx);
      let transaction= await walletFrom.sendTransaction(tx);
      
      let finalTransaction =await transaction.wait();
    
      console.log("Transaction status : "+finalTransaction.confirmations 
        + " hash "+finalTransaction.transactionHash
        + " block number "+ finalTransaction.blockNumber 
        + " gas used "+ finalTransaction.gasUsed.toString() );
}

async function callReadContractFunction(){
    let rep =await currentContract.retrieve()
    console.log(rep)
}

async function callSetContractFunction(functionName, wallet){

    // Solidity: function someFunction(address addr) public
    let contractWithSigner = await currentContract.connect(wallet);
  
    let gasPriceHex = ethers.utils.hexlify(8000000000);
    //Set max gas limit to 4M
    var gasLimitHex = ethers.utils.hexlify(4000000);
    // Raw Transaction
    var rawTx = {
        gasLimit: gasLimitHex,
        gasPrice: gasPriceHex,
    };

    let unsignedTx
    switch(functionName)
    {
        case "store":
            unsignedTx = await contractWithSigner.populateTransaction.store(10, rawTx)
            break;
        case "reset":
            unsignedTx = await contractWithSigner.populateTransaction.reset(rawTx)
            break;
    }
  
    await wallet.signTransaction(unsignedTx);
    let transaction = await wallet.sendTransaction(unsignedTx);
    let finalTransaction= await transaction.wait();
    
    console.log("Transaction status : "+finalTransaction.confirmations 
        + " hash "+finalTransaction.transactionHash
        + " block number "+ finalTransaction.blockNumber 
        + " gas used "+ finalTransaction.gasUsed.toString() );
}

async function doSignMessage(message, wallet){    
     //verifiying message
     let signature = await wallet.signMessage(message);
     let verified = await ethers.utils.verifyMessage(message,signature);
     console.log("Adresse that signed str "+verified) ; 

}

main()
.then(() => process.exit(0))
.catch((error) => {
   console.error(error);
   process.exit(1);
});