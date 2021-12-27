// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import './MerkleProof.sol';

contract Whitelist {

    bytes32 private merkleRoot = 0x185622dc03039bc70cbb9ac9a4a086aec201f986b154ec4c55dad48c0a474e23;
    mapping(address => bool) public claimed;

    function whitelistClaim(bytes32[] calldata _merkleProof) public {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "Address not whitelisted");
        require(!claimed[msg.sender], "Address has already claimed.");
        claimed[msg.sender] = true;
    }
}