import { ethers } from "hardhat";

/**
 * デプロイメソッド
 */
async function main() {
  // Router address
  const router_address = "0xD0daae2231E9CB96b94C8512223533293C3693Bf";
  // LINK Token address
  const link_token_address = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

  const Sender = await ethers.getContractFactory("Sender");
  // デプロイ
  const sender = await Sender.deploy(
    router_address,
    link_token_address
  )

  await sender.waitForDeployment();

  console.log(
    `deployed to ${sender.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
