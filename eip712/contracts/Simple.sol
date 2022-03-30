// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.0;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

import "./EIP712.sol";

contract Simple is EIP712 {

    uint256 private _value;
    uint8 private _num;

    bytes32 public CACHE_TEST_HASH = keccak256("test_set_value(uint256 value,uint8 num)");

    constructor() EIP712("Simple", "v1") {}

    function get() external view returns (uint256, uint8) {
        return (_value, _num);
    }

    function test_set_value(uint256 value, uint8 num, uint8 v, bytes32 r, bytes32 s) external {
        bytes32 funcHash = keccak256(abi.encode(CACHE_TEST_HASH, value, num));
        bytes32 signHash = keccak256(abi.encodePacked("\x19\x01", _domainSeparator(), funcHash));
        address signer = ECDSA.recover(signHash, v, r, s);
        require(signer == msg.sender, "Error here?");
        _value = value;
        _num = num;
    }
}
