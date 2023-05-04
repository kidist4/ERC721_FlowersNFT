require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks : {
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts : [process.env.PRIVATE_KEY]
      
     },

    }

};
