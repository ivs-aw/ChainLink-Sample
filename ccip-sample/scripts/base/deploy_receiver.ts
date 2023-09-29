import { ethers } from "hardhat";

/**
 * デプロイメソッド
 */
async function main() {
  // Router address
  const router_address = "0x70499c328e1E2a3c41108bd3730F6670a44595D1";

  const Receiver = await ethers.getContractFactory("Receiver");
  // デプロイ
  const receiver = await Receiver.deploy(
    router_address,
  )

  await receiver.waitForDeployment();

  console.log(
    `deployed to ${receiver.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
