async function main() {

    const Incrementer = await ethers.getContractFactory('Incrementer');
    console.log('Deploying Box...');
 
    // Instantiating a new Box smart contract
    const increm = await Incrementer.deploy(10);
 
    // Waiting for the deployment to resolve
    await increm.deployed();
    console.log('Box deployed to:', increm.address);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });