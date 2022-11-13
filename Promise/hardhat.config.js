require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "6JYMNU9w1PHj8k_98eUJAvK_-BmVkZTO";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const MUMBAI_PRIVATE_KEY = "8c3fba3bef17d97aaa997c39ca85e642d32c1f8cbb3b7c8ef519a855909da47d";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [MUMBAI_PRIVATE_KEY]
    }
  }
};
