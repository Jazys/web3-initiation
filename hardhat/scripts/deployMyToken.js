async function main() {
    // We get the contract to deploy
    const MyToken = await ethers.getContractFactory('Token');
    console.log('Deploying MyToken...');
 
    // Instantiating a new Box smart contract
    const mytok = await MyToken.deploy("Token", "TOK");
 
    // Waiting for the deployment to resolve
    await mytok.deployed();
    console.log('MyToken deployed to:', mytok.address);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });