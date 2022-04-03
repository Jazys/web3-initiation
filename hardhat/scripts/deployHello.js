async function main() {
    // We get the contract to deploy
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Hello = await ethers.getContractFactory('Hello');
    console.log('Deploying Hello...');
 
    // Instantiating a new Box smart contract
    const hell = await Hello.deploy();
 
    console.log('Hello deployed to:', hell.address);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });