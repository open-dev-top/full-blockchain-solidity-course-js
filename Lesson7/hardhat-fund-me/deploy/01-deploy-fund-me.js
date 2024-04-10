// function deployFunc() {
//     console.log("Hi")
//      hre.getNamedAccounts()
//      hre.deployments
// }

const { network } = require("hardhat")

// module.exports.default = deployFunc

// module.exports = async (hre) => {
//     const { getNamedAccounts, deployments } = hre
//     console.log(getNamedAccounts)
//     console.log(deployments)
// }

// Get getNamedAccounts and deployments from hre
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
}
