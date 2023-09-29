import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';

dotenv.config();

const { 
  PRIVATE_KEY, 
  POLYGONSCAN_API_KEY,
  SEPOLIA_API_URL,
  MUMBAI_API_URL,
  ETHERSCAN_API_KEY,
  COINMARKETCAP_API_KEY,
  REPORT_GAS
} = process.env;


const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: '0.8.19',
      settings: {
        optimizer: { enabled: true, runs: 1000000 }
      }
    }],
  },
  networks: {
    mumbai: {
      url: MUMBAI_API_URL,
      accounts: [`${PRIVATE_KEY}`],
    },
    sepolia: {
      url: SEPOLIA_API_URL,
      accounts: [`${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey:{
      mumbai: `${POLYGONSCAN_API_KEY}`,
      sepolia: `${ETHERSCAN_API_KEY}`
    }
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      enabled: REPORT_GAS ? true : false,
      currency: "JPY",
      gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
      coinmarketcap: COINMARKETCAP_API_KEY,
    }
  },
};

export default config;
