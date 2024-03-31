// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract SimpleStorge {
    uint256 my_variable;

    function store(uint256 _variable) public {
        my_variable = _variable;
    }
}