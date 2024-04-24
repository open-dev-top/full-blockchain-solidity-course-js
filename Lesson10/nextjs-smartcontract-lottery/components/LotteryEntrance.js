import { useWeb3Contract } from "react-moralis"
import { abi, contractAddresses } from "../constants"
import { useMoralis } from "react-moralis"

export default function LotteryEntrance() {
    const { chainId } = useMoralis()
    console.log("chainId", chainId)

    // const { runContractFunction: enterRaffle } = useWeb3Contract({
    //     abi: abi,
    //     contractAddress: contractAddresses,
    // })
    return <div>Hi from LotteryEntrance component</div>
}
