import { ethers } from "hardhat";

async function main() {
  // const [owner] = await ethers.getSigners();

  const SimpleInputOutput = await ethers.getContractFactory(
    "SimpleInputOutput"
  );
  const simpleInputOutput = await SimpleInputOutput.deploy();

  await simpleInputOutput.deployed();

  console.log("SimpleInputOutput deployed to:", simpleInputOutput.address);

  const setTestString = await simpleInputOutput.setTestString("Hello");
  let tx = await setTestString.wait();
  //   console.log(tx);
  const getTestString = await simpleInputOutput.getTestString();
  console.log("Retrieved string:", getTestString);

  const setTestHash = await simpleInputOutput.setTestHash(
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Hello"))
  );
  tx = await setTestHash.wait();
  //   console.log(tx);
  const getTestHash = await simpleInputOutput.getTestHash();
  console.log("Retrieved hash:", getTestHash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
