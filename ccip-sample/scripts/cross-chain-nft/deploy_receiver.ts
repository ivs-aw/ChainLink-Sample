import { ethers } from "hardhat";

/**
 * デプロイメソッド
 */
async function main() {
  // Router address
  const router_address = "0x70499c328e1E2a3c41108bd3730F6670a44595D1";
  // nft address
  const nft_address = "0x1ad7fce32EdB9A1b4bd7E250Fd90e03cD74cDe06";

  const Minter = await ethers.getContractFactory("DestinationMinter");
  // デプロイ
  const minter = await Minter.deploy(
    router_address,
    nft_address
  )

  await minter.waitForDeployment();

  console.log(
    `deployed to ${minter.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
