const ethers = require("ethers");
const fs = require("fs-extra");

// synchronous [solidity]
// asynchronous [javascript]

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("http//127.0.0.1:7545");
  const wallet = new ethers.wallet(
    "0xb2ea5efb8d1a0f9e5da886f9771193116ad5c9f4d1928ec3d6999a4294822072",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimleStorage.abi", "utf8");
  const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage", "utf8");
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying! Please wait ...");
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
