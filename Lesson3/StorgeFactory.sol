// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.5;

import "./SimpleStorage.sol";

contract StorgeFactory {
    SimpleStorage[] public simpleStorageArray;

    function createSimpleStorageContract() public {
        
        SimpleStorage simpleStorage = new SimpleStorage();
        simpleStorageArray.push(simpleStorage);
    }

    function sfStore(uint256 _simpleStorageIndex, uint256 _simpleStorageNumber) public {
        // 存储 simpleStorage contract 的地址，自动封装 ABI
        SimpleStorage simpleStorage = simpleStorageArray[_simpleStorageIndex];
        simpleStorage.store(_simpleStorageNumber);
    }

    function sfGet(uint256 _simpleStorageIndex) public view returns(uint256) {
        // 根据地址定位合同
        SimpleStorage simpleStorage = simpleStorageArray[_simpleStorageIndex];
        return simpleStorage.retrieve();
    }
}
