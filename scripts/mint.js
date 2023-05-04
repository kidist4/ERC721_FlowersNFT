//const { ethers } = require("hardhat")
const ethers = require("ethers");
const flowersNFTJSON = require("../artifacts/contracts/FlowersNFT.sol/FlowersNFT.json")

async function main() {
  const abi = flowersNFTJSON.abi
  const provider = new ethers.JsonRpcProvider(process.env.MUMBAI_URL)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)
  const flowersNFT = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
  await flowersNFT.mint("https://ipfs.filebase.io/ipfs/QmXxgvDrzpmEwyq8izywKq9gMTrQEvsmUhNSqZqGx1fQAH")
  console.log('NFT minted!')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
