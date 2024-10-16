
// hardhat runtime environment
const hre = require("hardhat");
// nodejs path
const path = require("path");
// fs file system
const fs = require("fs");

const threeDaysInSeconds = 3 * 24 * 60 * 60;
// npx hardhat run scripts/deploy.js --network localhost
// npx hardhat run scripts/deploy.js --network localhost
// npx hardhat run scripts/deploy.js --network localhost
// npx hardhat run scripts/deploy.js --network localhost



// main function to deploy
async function main() { 
    console.log("Deployment started!");
    // THIS DOESNT DO ANYTHING
    // we just want the address of the deployer
    const [deployer] = await ethers.getSigners();



    console.log("Deploying contracts with the account:", await deployer.getAddress());
    console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());
   


    // Get the ContractFactories and Signers here.



// COINS    // COINS    // COINS    // COINS    // COINS    // COINS    // COINS    // COINS    // COINS    // COINS
//DAO coin 
    const testoContract = await ethers.getContractFactory("testo");
    const testo = await testoContract.deploy(deployer);
    await testo.waitForDeployment();
    console.log(`Testo contract deployed to ${testo.target}`);
    saveFrontendFiles(testo , "testo");

}

// function to create and save contract files
// we create a folder and a file to interact with the contract ABI with our frontend
// if the file doesnt existsSync, create, if it does, write
// this function writes a couple of files
// the address the contract was deployed to
// the artifact file that has the abi and bytecode
function saveFrontendFiles(contract, name) {

  const contractsDir = path.join(__dirname, "..", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, `contract-address-${name}.json`),
    JSON.stringify({ address: contract.target }, null, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    path.join(contractsDir, `${name}.json`),
    JSON.stringify(contractArtifact, null, 2)
  );
}





main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

// to run this to deploy to localhost if the script folder is in the base folder, else you need to add ./src/scripts/deploy.js
// npx hardhat run scripts/deploy.js --network localhost

// npx hardhat run scripts/deploy.js --network <network-name>
// the network we deploy to is based on the network we set in hardhat config


// to run this to deploy to mumbai
// npx hardhat run scripts/deploy.js --network polygon_mumbai