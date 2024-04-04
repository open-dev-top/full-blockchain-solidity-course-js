// 从用户获取资金
// 提款
// 设置最小融资金额

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import {AggregatorV3Interface} from "@chainlink/contracts@1.0.0/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    uint256 public minUSD = 10 * 1e18;

    function fund() public payable {
        require(getConversionRate(msg.value) >= minUSD, "Requires at least 1ETH");
    }

    function getPrice() public view returns(uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        (,int256 price,,,) = priceFeed.latestRoundData();
        return uint256(price * 1e10); // price 是 8 位小数，minUSD 是 18 位小数。
    }

    function getversion() public view returns(uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        return priceFeed.version();
    }

    function getConversionRate(uint256 ethAmount) public view returns(uint256) {
        uint256 ethPrice = getPrice();
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
        return ethAmountInUsd;
    }

    // function withdraw() {
    //     ;
    // }

}
