/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require('@nomiclabs/hardhat-truffle5');

const { RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.17",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: RPC_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}