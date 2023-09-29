import { ethers } from "hardhat";

/**
 * NFTの残高取得メソッド実行メソッド
 */
async function main() {
  // nft address (mumbai)
  const nft_address = "0x1ad7fce32EdB9A1b4bd7E250Fd90e03cD74cDe06";

  // アカウントを取得
  const nft = await ethers.getContractAt(
    "MyNFT",
    nft_address
  );

  // get minterアドレス
  const acccounts = await ethers.getSigners();
  const minter_address = acccounts[0];
  
  // 残高を取得する
  const balance = await nft.balanceOf(minter_address);

  console.log(
    `balanceOf: ${balance}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
