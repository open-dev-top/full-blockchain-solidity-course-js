// 从用户获取资金
// 提款
// 设置最小融资金额

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;

    uint256 public minUSD = 10 * 1e18;

    address[] public funders;
    mapping(address => uint256) public addressToAmountFended;

    function fund() public payable {
        require(msg.value.getConversionRate() >= minUSD, "Requires at least 1ETH");
        funders.push(msg.sender);
        addressToAmountFended[msg.sender] = msg.value;
    }



    // function withdraw() {
    //     ;
    // }

}
