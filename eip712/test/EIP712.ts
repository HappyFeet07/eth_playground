import { ethers } from "hardhat";
import { BigNumber, BytesLike, Contract, Wallet } from "ethers";
import { expect, util } from "chai";
import { Simple, } from "../typechain-types";
let utils = ethers.utils;

describe('EIP712 in practice', () => {

  let contract: Simple;
  let user: Wallet;

  before(async () => {
    contract = await (await ethers.getContractFactory('Simple')).deploy() as Simple;
    user = (await (ethers as any).getSigners())[0];
  })

  it("test_set_value and get", async () => {

    const domain = {
      name: 'Simple',
      version: 'v1',
      chainId: ethers.provider.network.chainId,
      verifyingContract: contract.address.toString(),
    };

    const types = {
      test_set_value: [
        { name: 'value', type: 'uint256'},
        { name: 'num', type: 'uint8'},
      ]
    }

    const val = {
      value : ethers.BigNumber.from('123'),
      num: ethers.BigNumber.from('3'),
    }

    const signature = await user._signTypedData(domain, types, val);
    const {v, r, s} = ethers.utils.splitSignature(signature);

    await contract.test_set_value(123, 3, v, r, s);
    const get = await contract.get();
    expect(get[0]).to.eq(ethers.BigNumber.from(123));
    expect(get[1]).to.eq(3);
  })
})