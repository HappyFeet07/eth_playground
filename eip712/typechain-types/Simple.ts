/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SimpleInterface extends utils.Interface {
  functions: {
    "CACHE_TEST_HASH()": FunctionFragment;
    "get()": FunctionFragment;
    "test_set_value(uint256,uint8,uint8,bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CACHE_TEST_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "get", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "test_set_value",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "CACHE_TEST_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "test_set_value",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Simple extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SimpleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CACHE_TEST_HASH(overrides?: CallOverrides): Promise<[string]>;

    get(overrides?: CallOverrides): Promise<[BigNumber, number]>;

    test_set_value(
      value: BigNumberish,
      num: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CACHE_TEST_HASH(overrides?: CallOverrides): Promise<string>;

  get(overrides?: CallOverrides): Promise<[BigNumber, number]>;

  test_set_value(
    value: BigNumberish,
    num: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CACHE_TEST_HASH(overrides?: CallOverrides): Promise<string>;

    get(overrides?: CallOverrides): Promise<[BigNumber, number]>;

    test_set_value(
      value: BigNumberish,
      num: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    CACHE_TEST_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    get(overrides?: CallOverrides): Promise<BigNumber>;

    test_set_value(
      value: BigNumberish,
      num: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CACHE_TEST_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    test_set_value(
      value: BigNumberish,
      num: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
