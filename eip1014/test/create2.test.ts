import { ethers } from "hardhat";
import { BigNumber, BytesLike, Contract, Signer } from "ethers";
import { expect, util } from "chai";
import {
  Factory__factory,
  Account__factory,
  Factory,
  Account
} from "../typechain-types";
let utils = ethers.utils;

describe('Create2', () => {
   it('Should be deploy as the same address as calculated', async () => {
    const [deployer, user1, user2] = await ethers.getSigners();
    const Factoryfactory = new Factory__factory(deployer);
    const Accountfactory = new Account__factory(deployer);
    let deployTx = Accountfactory.getDeployTransaction(await user1.getAddress());
    const factory = await Factoryfactory.deploy();
    await factory.deployed();

    const salt = utils.keccak256(utils.toUtf8Bytes("TEST123"));
    const init = deployTx.data as BytesLike;
    const initCodeHash = utils.keccak256(init);


    const exactAddress = utils.getCreate2Address(
      factory.address,
      salt, 
      initCodeHash
    );

    await factory.deploy(BigNumber.from('0'), salt, init);
    const account = await ethers.getContractFactory('Account');
    const AccountCreated = await account.attach(exactAddress);
    const returnAddr = await AccountCreated.owner();
    expect(returnAddr).to.eql(await user1.getAddress());
  })
})