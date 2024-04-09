// function deployFunc() {
//     console.log("Hi")
// }

// module.exports.default = deployFunc

module.exports = async (hre) => {
    const { getNamedAccounts, deployments } = hre
    console.log(getNamedAccounts)
    console.log(deployments)
}
