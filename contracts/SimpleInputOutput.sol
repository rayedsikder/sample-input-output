// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;
contract SimpleInputOutput {
    string testString;
    bytes32 testHash;

    function getTestString() public view returns (string memory) {
        return testString;
    }

    function setTestString(string memory _test) public {
        testString = _test;
    }

    function getTestHash() public view returns (bytes32) {
        return testHash;
    }

    function setTestHash(bytes32 _test) public {
        testHash = _test;
    }

}