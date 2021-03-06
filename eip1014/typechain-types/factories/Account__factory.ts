/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Account, AccountInterface } from "../Account";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105293803806105298339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b61041b8061010e6000396000f3fe6080604052600436106100375760003560e01c8062f55d9d1461004357806313af40351461006c5780638da5cb5b146100955761003e565b3661003e57005b600080fd5b34801561004f57600080fd5b5061006a600480360381019061006591906102af565b6100c0565b005b34801561007857600080fd5b50610093600480360381019061008e9190610286565b610167565b005b3480156100a157600080fd5b506100aa610238565b6040516100b79190610327565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461014e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014590610342565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16ff5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610342565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008135905061026b816103b7565b92915050565b600081359050610280816103ce565b92915050565b60006020828403121561029857600080fd5b60006102a68482850161025c565b91505092915050565b6000602082840312156102c157600080fd5b60006102cf84828501610271565b91505092915050565b6102e181610373565b82525050565b60006102f4601283610362565b91507f73656e6465722069736e2774206f776e657200000000000000000000000000006000830152602082019050919050565b600060208201905061033c60008301846102d8565b92915050565b6000602082019050818103600083015261035b816102e7565b9050919050565b600082825260208201905092915050565b600061037e82610397565b9050919050565b600061039082610397565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6103c081610373565b81146103cb57600080fd5b50565b6103d781610385565b81146103e257600080fd5b5056fea26469706673582212206cdf546d642d808b8f7ad87d408183e44dde9b783283bdbc83a9c780864eaf2a64736f6c63430008000033";

type AccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Account__factory extends ContractFactory {
  constructor(...args: AccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Account> {
    return super.deploy(_owner, overrides || {}) as Promise<Account>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): Account {
    return super.attach(address) as Account;
  }
  connect(signer: Signer): Account__factory {
    return super.connect(signer) as Account__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountInterface {
    return new utils.Interface(_abi) as AccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Account {
    return new Contract(address, _abi, signerOrProvider) as Account;
  }
}
