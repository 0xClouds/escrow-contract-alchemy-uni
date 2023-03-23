const hre = require("hardhat");

async function main() {
  const contractFactory = await hre.ethers.getContractFactory("Escrow");
  const escrowContract = await contractFactory.deploy();

  await escrowContract.deployed();

  console.log(
    `Escrow Contract deployed https://goerli.etherscan.io/${escrowContract.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
