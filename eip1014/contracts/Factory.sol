// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.0;

contract Factory {

     function deploy(
        uint256 amount,
        bytes32 salt,
        bytes memory bytecode
    ) public returns (address) {
        address addr;
        require(address(this).balance >= amount, "Create2: insufficient balance");
        require(bytecode.length != 0, "Create2: bytecode length is zero");
        assembly {
            addr := create2(amount, add(bytecode, 0x20), mload(bytecode), salt)
        }
        require(addr != address(0), "Create2: Failed on deploy");
        return addr;
    }
}