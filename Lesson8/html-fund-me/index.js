import { ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

// console.log(ethers)

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        console.log("Your metamask has been detected!")
        await window.ethereum.request({
            method: "eth_requestAccounts",
            params: [],
        })
        console.log("Your metamask has been conected!")
        connectButton.innerHTML = "CONNECTED"
    } else {
        console.log("Please install a metamask.")
        connectButton.innerHTML = "ERROR"
    }
}

// fund function
async function fund() {
    const ethAmount = "77"
    console.log(`Funding with ${ethAmount}...`)
    if (typeof window.ethereum !== "undefined") {
        // provider: connection to the blockchain
        // signer: wallet, some one with some gas
        // contract that we are interacting with
        // ^ ABI & Address
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const singer = provider.getSigner()
        // console.log(singer)
        const contract = new ethers.Contract(contractAddress, abi, singer)
        const transactionResponse = await contract.fund({
            value: ethers.utils.parseEther(ethAmount),
        })
    }
}

// withdraw function
