require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and add its key to the configuration variables
const ALCHEMY_API_KEY = "B1APUvgQR2GBR9hcdap1a5lr39ESlRvU";

// Add your Sepolia account private key to the configuration variables
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY =
  "3b9f0e5aab3d844d2b3d7f9fd78d7f2996870e81c18945ada594d2fecaff6d15";

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/B1APUvgQR2GBR9hcdap1a5lr39ESlRvU",
      accounts: [
        "3b9f0e5aab3d844d2b3d7f9fd78d7f2996870e81c18945ada594d2fecaff6d15",
      ],
    },
  },
};
