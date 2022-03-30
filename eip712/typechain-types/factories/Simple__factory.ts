/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Simple, SimpleInterface } from "../Simple";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CACHE_TEST_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "num",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "test_set_value",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040527faa8a934f933fe6ebf3482d6484f0662e69bb3833ef7164d660955e1f4019c8806002553480156200003657600080fd5b506040518060400160405280600681526020017f53696d706c6500000000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f76310000000000000000000000000000000000000000000000000000000000008152506000828051906020012090506000828051906020012090503073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250504660a081815250508160c081815250508060e081815250507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8282463060405160200162000145959493929190620001a0565b6040516020818303038152906040528051906020012061010081815250505050505062000245565b6200017881620001fd565b82525050565b620001898162000211565b82525050565b6200019a816200023b565b82525050565b600060a082019050620001b760008301886200017e565b620001c660208301876200017e565b620001d560408301866200017e565b620001e460608301856200018f565b620001f360808301846200016d565b9695505050505050565b60006200020a826200021b565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60805160601c60a05160c05160e05161010051610ba26200028160003960006101d6015260005050600050506000505060005050610ba26000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635496b0b0146100465780636d4ce63c146100645780637ad4444914610083575b600080fd5b61004e61009f565b60405161005b9190610980565b60405180910390f35b61006c6100a5565b60405161007a929190610ab7565b60405180910390f35b61009d600480360381019061009891906106c2565b6100c3565b005b60025481565b600080600054600160009054906101000a900460ff16915091509091565b600060025486866040516020016100dc9392919061099b565b60405160208183030381529060405280519060200120905060006100fe6101d2565b82604051602001610110929190610949565b6040516020818303038152906040528051906020012090506000610136828787876101fa565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146101a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019d90610a57565b60405180910390fd5b8760008190555086600160006101000a81548160ff021916908360ff1602179055505050505050505050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600080600061020b87878787610225565b9150915061021881610332565b8192505050949350505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610260576000600391509150610329565b601b8560ff16141580156102785750601c8560ff1614155b1561028a576000600491509150610329565b6000600187878787604051600081526020016040526040516102af94939291906109d2565b6020604051602081039080840390855afa1580156102d1573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561032057600060019250925050610329565b80600092509250505b94509492505050565b6000600481111561036c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160048111156103a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14156103b057610680565b600160048111156103ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b816004811115610423577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415610464576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045b90610a17565b60405180910390fd5b6002600481111561049e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160048111156104d7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1415610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050f90610a37565b60405180910390fd5b60036004811115610552577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81600481111561058b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14156105cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c390610a77565b60405180910390fd5b600480811115610605577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81600481111561063e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b141561067f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067690610a97565b60405180910390fd5b5b50565b60008135905061069281610b27565b92915050565b6000813590506106a781610b3e565b92915050565b6000813590506106bc81610b55565b92915050565b600080600080600060a086880312156106da57600080fd5b60006106e888828901610698565b95505060206106f9888289016106ad565b945050604061070a888289016106ad565b935050606061071b88828901610683565b925050608061072c88828901610683565b9150509295509295909350565b61074281610afc565b82525050565b61075961075482610afc565b610b1d565b82525050565b600061076c601883610ae0565b91507f45434453413a20696e76616c6964207369676e617475726500000000000000006000830152602082019050919050565b60006107ac601f83610ae0565b91507f45434453413a20696e76616c6964207369676e6174757265206c656e677468006000830152602082019050919050565b60006107ec600283610af1565b91507f19010000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b600061082c600b83610ae0565b91507f4572726f7220686572653f0000000000000000000000000000000000000000006000830152602082019050919050565b600061086c602283610ae0565b91507f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006108d2602283610ae0565b91507f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008301527f75650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b61093481610b06565b82525050565b61094381610b10565b82525050565b6000610954826107df565b91506109608285610748565b6020820191506109708284610748565b6020820191508190509392505050565b60006020820190506109956000830184610739565b92915050565b60006060820190506109b06000830186610739565b6109bd602083018561092b565b6109ca604083018461093a565b949350505050565b60006080820190506109e76000830187610739565b6109f4602083018661093a565b610a016040830185610739565b610a0e6060830184610739565b95945050505050565b60006020820190508181036000830152610a308161075f565b9050919050565b60006020820190508181036000830152610a508161079f565b9050919050565b60006020820190508181036000830152610a708161081f565b9050919050565b60006020820190508181036000830152610a908161085f565b9050919050565b60006020820190508181036000830152610ab0816108c5565b9050919050565b6000604082019050610acc600083018561092b565b610ad9602083018461093a565b9392505050565b600082825260208201905092915050565b600081905092915050565b6000819050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b610b3081610afc565b8114610b3b57600080fd5b50565b610b4781610b06565b8114610b5257600080fd5b50565b610b5e81610b10565b8114610b6957600080fd5b5056fea26469706673582212205ee5e1778c4953745fd199e6702e2216ec381a6c2d9ebf3ab96a6eff2067d38764736f6c63430008000033";

type SimpleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Simple__factory extends ContractFactory {
  constructor(...args: SimpleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Simple> {
    return super.deploy(overrides || {}) as Promise<Simple>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Simple {
    return super.attach(address) as Simple;
  }
  connect(signer: Signer): Simple__factory {
    return super.connect(signer) as Simple__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleInterface {
    return new utils.Interface(_abi) as SimpleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Simple {
    return new Contract(address, _abi, signerOrProvider) as Simple;
  }
}
