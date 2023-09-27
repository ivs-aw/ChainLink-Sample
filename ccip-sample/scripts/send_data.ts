import { ethers } from "hardhat";

/**
 * send メソッド実行メソッド
 */
async function main() {
  // destinationChainSelector
  const chain_selector = "12532609583862916517";
  // sender address (sepolia)
  const sender_address = "0x7C7Bd8BC7cEBeb774FC2E94CA8e7f9c0a752e682";
  // receiver address (mumbai)
  const receiver_address = "0xad9A067f7Ee8812F94a28FC6b5891593D631E4cc";
  // text
  const text_data = "Hello World!";

  // アカウントを取得
  const sender = await ethers.getContractAt(
    "Sender",
    sender_address
  )
  
  const tx = await sender.sendMessage(
    chain_selector,
    receiver_address,
    text_data
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
