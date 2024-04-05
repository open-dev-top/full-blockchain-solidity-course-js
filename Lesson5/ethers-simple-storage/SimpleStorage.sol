// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract SimpleStorage {
    uint256 alexNumber;

    struct People {
        uint256 alexNumber;
        string name;
    }
    // uint256[] public anArray;
    People[] public people;

    mapping(string => uint256) public nameToalexNumber;

    function store(uint256 _alexNumber) public {
        alexNumber = _alexNumber;
    }

    function retrieve() public view returns (uint256) {
        return alexNumber;
    }

    function addPerson(string memory _name, uint256 _alexNumber) public {
        people.push(People(_alexNumber, _name));
        nameToalexNumber[_name] = _alexNumber;
    }
}
