require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const {
  PRIVATE_KEY, 
  SNOWTRACE_API_KEY
} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: SNOWTRACE_API_KEY
  },
  networks: {
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [PRIVATE_KEY]
    },
  },
};
