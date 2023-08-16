
require("@nomiclabs/hardhat-ethers");
async function main() {
    const Loyalty = await ethers.getContractFactory("Supplychain");
 
    // Start deployment, returning a promise that resolves to a contract object
    const loyalty = await Loyalty.deploy();   
    console.log("Contract deployed to address:", loyalty.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });