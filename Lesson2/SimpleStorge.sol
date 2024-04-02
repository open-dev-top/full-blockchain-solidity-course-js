// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract SimpleStorge {
    uint256 public my_variable;
    
    People[] public people;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    mapping (string => uint256) public nameToFavoriteNumber;


    function store(uint256 _variable) public {
        my_variable = _variable;
    }


    function retrieve() public view returns(uint256) {
        return my_variable;
    }

    function addPeople(uint256 _favoriteNumber, string memory _name) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
