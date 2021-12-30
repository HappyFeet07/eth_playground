// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.0;

contract Account {
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function setOwner(address _owner) public {
        require(msg.sender == owner, "sender isn't owner");
        owner = _owner;
    }

    function destroy(address payable recipient) public {
        require(msg.sender == owner, "sender isn't owner");
        selfdestruct(recipient);
    }

    receive() external payable {}
}