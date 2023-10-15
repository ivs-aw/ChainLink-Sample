import { ethers } from 'hardhat';


async function main() {
 
  // get Contract info
  const nft = await ethers.getContractAt('MyNFT', '0x1ad7fce32EdB9A1b4bd7E250Fd90e03cD74cDe06')

  console.log(
    ` ======================= transfer ownerShip start ========================= `
  )

  var desAddress = '0x822e253e3c239350799810E388DC45F371754CE1'

  // transfer ownership
  const tx = await nft.transferOwnership(ethers.getAddress(desAddress));

  await tx.wait()

  console.log(`transfer ownership result: ${tx}`)

  console.log(
    ` ======================== transfer ownerShip end  ======================== `
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
