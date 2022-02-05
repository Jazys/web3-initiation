async function main() {
    // We get the contract to deploy
    const Box = await ethers.getContractFactory('Box');
    console.log('Deploying Box...');
 
    // Instantiating a new Box smart contract
    const box = await Box.deploy();
 
    // Waiting for the deployment to resolve
    await box.deployed();
    console.log('Box deployed to:', box.address);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });