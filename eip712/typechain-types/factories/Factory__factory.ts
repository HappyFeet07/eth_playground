/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Factory, FactoryInterface } from "../Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061050e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806366cfa05714610030575b600080fd5b61004a60048036038101906100459190610203565b610060565b6040516100579190610339565b60405180910390f35b600080844710156100a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161009d90610394565b60405180910390fd5b6000835114156100eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100e290610354565b60405180910390fd5b8383516020850187f59050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610374565b60405180910390fd5b809150509392505050565b600061018461017f846103e5565b6103b4565b90508281526020810184848401111561019c57600080fd5b6101a784828561046c565b509392505050565b6000813590506101be816104aa565b92915050565b600082601f8301126101d557600080fd5b81356101e5848260208601610171565b91505092915050565b6000813590506101fd816104c1565b92915050565b60008060006060848603121561021857600080fd5b6000610226868287016101ee565b9350506020610237868287016101af565b925050604084013567ffffffffffffffff81111561025457600080fd5b610260868287016101c4565b9150509250925092565b61027381610426565b82525050565b6000610286602083610415565b91507f437265617465323a2062797465636f6465206c656e677468206973207a65726f6000830152602082019050919050565b60006102c6601983610415565b91507f437265617465323a204661696c6564206f6e206465706c6f79000000000000006000830152602082019050919050565b6000610306601d83610415565b91507f437265617465323a20696e73756666696369656e742062616c616e63650000006000830152602082019050919050565b600060208201905061034e600083018461026a565b92915050565b6000602082019050818103600083015261036d81610279565b9050919050565b6000602082019050818103600083015261038d816102b9565b9050919050565b600060208201905081810360008301526103ad816102f9565b9050919050565b6000604051905081810181811067ffffffffffffffff821117156103db576103da61047b565b5b8060405250919050565b600067ffffffffffffffff821115610400576103ff61047b565b5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b600061043182610442565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104b381610438565b81146104be57600080fd5b50565b6104ca81610462565b81146104d557600080fd5b5056fea2646970667358221220f7918f83ebfb853924dfc97d6aa969a936e773715bc04b23bc5384d593e4c91464736f6c63430008000033";

type FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Factory__factory extends ContractFactory {
  constructor(...args: FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Factory> {
    return super.deploy(overrides || {}) as Promise<Factory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Factory {
    return super.attach(address) as Factory;
  }
  connect(signer: Signer): Factory__factory {
    return super.connect(signer) as Factory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryInterface {
    return new utils.Interface(_abi) as FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Factory {
    return new Contract(address, _abi, signerOrProvider) as Factory;
  }
}
