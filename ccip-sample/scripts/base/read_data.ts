import { ethers } from "hardhat";

/**
 * send メソッド実行メソッド
 */
async function main() {
  // receiver address (mumbai)
  const receiver_address = "0xad9A067f7Ee8812F94a28FC6b5891593D631E4cc";
  
  // アカウントを取得
  const receiver = await ethers.getContractAt(
    "Receiver",
    receiver_address
  )
  
  const tx = await receiver.getLastReceivedMessageDetails();

  console.log(`message ID: ${tx.messageId}`);
  console.log(`result: ${tx.text}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
