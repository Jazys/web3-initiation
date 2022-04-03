var ethers = require('ethers');  
var crypto = require('crypto');


async function main() {

    var id = crypto.randomBytes(32).toString('hex');
    var privateKey = "0x"+id;
    console.log("SAVE BUT DO NOT SHARE THIS:", privateKey);

    
    const provider = ethers.getDefaultProvider('https://moon-rpc.nuage.omvpb.ovh')

    //wallet 1
    var wallet = new ethers.Wallet(privateKey);
    console.log("Address: " + wallet.address);

    let walletWithProvider = new ethers.Wallet(privateKey, provider);

    let balancePromise =await  walletWithProvider.getBalance();
    console.log(balancePromise) 

    let transactionCountPromise =await  walletWithProvider.getTransactionCount();
    console.log(transactionCountPromise) 

    //wallet 2
    let walletWithProvider2 = new ethers.Wallet("0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133", provider);

    let balancePromise2 =await  walletWithProvider2.getBalance();
    console.log(balancePromise2) 

    let transactionCountPromise2 =await  walletWithProvider2.getTransactionCount();
    console.log(transactionCountPromise2) 

    // You can also use an ENS name for the contract address
    const daiAddress = '0x21cb3940e6Ba5284E1750F1109131a8E8062b9f1'
    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    const daiAbi = [
    // Some details about the token
    'function store(uint256 newValue) public',
    'function retrieve() public view returns (uint256)',
    'event ValueChanged(uint256 newValue)',
    ]
    // The Contract object
    
    const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
    daiContract.on('ValueChanged', (tokenId) => {
        console.log(`Token #${tokenId} minted`)
    })
    
    //console.log(await daiContract);

    const gasPrice = await provider.getGasPrice();
    console.log(gasPrice.toString());
    const contractNameDai = await daiContract.retrieve()
    //console.log(`Contract name is ${contractNameDai}`)

    const overrides = {
        gasLimit: 30000 //optional
    }

    // Solidity: function someFunction(address addr) public
    let contractWithSigner = await daiContract.connect(walletWithProvider2);
    //console.log(contractWithSigner)
    //let tx = await contractWithSigner.store(1, overrides).then((data)=> console.log(data))
    //console.log(tx)
    //await walletWithProvider2.signTransaction(tx);
    let gasPriceHex = ethers.utils.hexlify(8000000000);
    //Set max gas limit to 4M
    var gasLimitHex = ethers.utils.hexlify(4000000);
    // Raw Transaction
    var rawTx = {
        gasLimit: gasLimitHex,
        gasPrice: gasPriceHex,
    };

    let unsignedTx = await contractWithSigner.populateTransaction.store(10, rawTx)
    await walletWithProvider2.signTransaction(unsignedTx);
    let response = await walletWithProvider2.sendTransaction(unsignedTx);
    let rep= await response.wait();
    //console.log(rep);
    

    const contractNameDai2 = await contractWithSigner.retrieve()
    console.log(`Contract name is ${contractNameDai2}`)

    const tx2 = {
        from: walletWithProvider2.address,
        to: walletWithProvider.address,
        value: ethers.utils.parseEther("0.00000001"),
        nonce: walletWithProvider2.getTransactionCount(),
        gasLimit: ethers.utils.hexlify(2000000), // 100000
        gasPrice: gasPrice,
      }

      balancePromise =await  walletWithProvider2.getBalance();
      console.log(balancePromise) 

     
      await walletWithProvider2.signTransaction(tx2);
      let totp= await walletWithProvider2.sendTransaction(tx2);
      //await walletWithProvider2.signTransaction(totp);
     
      console.log(totp);

      balancePromise =await  walletWithProvider.getBalance();
      console.log(balancePromise);

      //verifiying message
      let signature = await walletWithProvider2.signMessage("hello");
      let verified = await ethers.utils.verifyMessage("hello",signature);
      console.log(verified)  

}



main()
.then(() => process.exit(0))
.catch((error) => {
   console.error(error);
   process.exit(1);
});