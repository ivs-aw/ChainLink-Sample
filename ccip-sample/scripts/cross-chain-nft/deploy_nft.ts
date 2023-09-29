import { ethers } from "hardhat";

/**
 * デプロイメソッド
 */
async function main() {

  const MyNFT = await ethers.getContractFactory("MyNFT");
  // デプロイ
  const nft = await MyNFT.deploy()

  await nft.waitForDeployment();

  console.log(
    `deployed to ${nft.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
