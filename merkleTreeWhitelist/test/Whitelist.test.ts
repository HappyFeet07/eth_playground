import { ethers } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { expect, use } from "chai";
import {
  Whitelist__factory,
  Whitelist,
} from "../typechain-types";
import { MerkleTree } from "merkletreejs";
import keccak256 = require("keccak256");


let utils = ethers.utils;

describe('Whitelist', () => {
  let user1: Signer, user2: Signer, user3: Signer, user4: Signer, user5: Signer, user6: Signer, user7: Signer, user8: Signer;
  let whitelistFactory;
  let whitelistContract: Whitelist;

  let whitelist = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
    "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
    "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
    "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
    "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
  ]

  let mProofByIndex = function(list: string[], index: number): any {
    let leafNodes = list.map(addr => keccak256(addr));
    let tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    let hexProof = tree.getHexProof(leafNodes[index]);
    return hexProof;
  };

  before(async () => {
    [user1, user2, user3, user4, user5, user6, user7, user8] = await ethers.getSigners();
  })

  beforeEach(async () => {
    whitelistFactory = await ethers.getContractFactory('Whitelist') as Whitelist__factory;
    whitelistContract = await whitelistFactory.deploy() as Whitelist;
  })

  it('Check if address is whitelisted', async () => {
    expect(await whitelistContract.claimed(await user1.getAddress())).to.eql(false);
    let hexProof = mProofByIndex(whitelist, 0);
    await whitelistContract.connect(user1).whitelistClaim(hexProof);
    expect(await whitelistContract.claimed(await user1.getAddress())).to.eql(true);
  })
})

