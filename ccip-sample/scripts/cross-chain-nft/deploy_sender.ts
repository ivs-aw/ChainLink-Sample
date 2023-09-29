import { ethers } from "hardhat";

/**
 * デプロイメソッド
 */
async function main() {
  // Router address
  const router_address = "0xD0daae2231E9CB96b94C8512223533293C3693Bf";
  // LINK Token address
  const link_token_address = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

  const SourceMinter = await ethers.getContractFactory("SourceMinter");
  // デプロイ
  const sourceMinter = await SourceMinter.deploy(
    router_address,
    link_token_address
  )

  await sourceMinter.waitForDeployment();

  console.log(
    `deployed to ${sourceMinter.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
