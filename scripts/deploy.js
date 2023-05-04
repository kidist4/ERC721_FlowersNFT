const { ethers } = require("hardhat")

async function main() {
  const FlowersNFT= await ethers.getContractFactory("FlowersNFT")
  const flowersNFT= await FlowersNFT.deploy("FlowersNFT", "FLN");

  await flowersNFT.deployed()
  console.log(`Contract successfully deployed to ${flowersNFT.address}`)

  const newItemId = await flowersNFT.mint("https://ipfs.filebase.io/ipfs/QmfXJfxVFzCWJxd5tkhZRxUX71ceZ9Ze5bEjRQnuK7L69b")
  console.log(`NFT minted successfully :: ${newItemId}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
