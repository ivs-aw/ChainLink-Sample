import { ethers } from "hardhat";
import { getPayFeesIn } from "./../utils";

/**
 * send メソッド実行メソッド
 */
async function main() {
  // destinationChainSelector
  const chain_selector = "12532609583862916517";
  // sender address (fuji)
  const sender_address = "0xc70dC86cd3B55f745A2e5C11F38B50D939986f1d";
  // receiver address (mumbai)
  const receiver_address = "0x822e253e3c239350799810E388DC45F371754CE1";

  // get fee
  const fee = getPayFeesIn("LINK");

  // アカウントを取得
  const sender = await ethers.getContractAt(
    "SourceMinter",
    sender_address
  )
  
  // mintメソッドをsepolia側から実行
  const tx = await sender.mint(
    chain_selector,
    receiver_address,
    fee
  );

  await tx.wait();

  console.log(
    `result: ${tx.hash}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
