// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {AggregatorV3Interface} from "@chainlink/contracts@1.0.0/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED
 * VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

/**
 * If you are reading data feeds on L2 networks, you must
 * check the latest answer from the L2 Sequencer Uptime
 * Feed to ensure that the data is accurate in the event
 * of an L2 sequencer outage. See the
 * https://docs.chain.link/data-feeds/l2-sequencer-feeds
 * page for details.
 */

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    /**
    * Network: Sepolia
    * Data Feed: ETH/USD
    * Address: 0x694AA1769357215DE4FAC081bf1f309aDC325306
    */
    constructor() {
        priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
    }



    /**
     * Returns the latest answer.
     */
    function getChainlinkpriceFeedLatestAnswer() public view returns (int) {
        // prettier-ignore
        (
            /* uint80 roundID */,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return price;
    }
}

// 3270.36205460
