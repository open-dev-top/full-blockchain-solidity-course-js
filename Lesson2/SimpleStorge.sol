// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract SimpleStorge {
    uint256 public my_variable;

    function store(uint256 _variable) public {
        my_variable = _variable;
    }
}

// 0xDA0bab807633f07f013f94DD0E6A4F96F8742B53