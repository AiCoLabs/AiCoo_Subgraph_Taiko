import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AiCooRoyaltyDataSet,
  BaseInitialized,
  BurnNFTFromCollection,
  CollectionFeeAddressSet,
  CreateCollectionFeeSet,
  DerivedNFTInitialized,
  DerivedRuleModuleWhitelisted,
  EmergencyAdminSet,
  FeeModuleBaseConstructed,
  GovernanceSet,
  MaxRoyaltySet,
  ModuleBaseConstructed,
  ModuleGlobalsCurrencyWhitelisted,
  ModuleGlobalsGovernanceSet,
  ModuleGlobalsTreasuryFeeSet,
  ModuleGlobalsTreasurySet,
  NewCollectionCreated,
  NewCollectionMintInfo,
  NewNFTCreated,
  StateSet
} from "../generated/AiCooHub/AiCooHub"

export function createAiCooRoyaltyDataSetEvent(
  caller: Address,
  royaltyAddr: Address,
  percentage: BigInt,
  timestamp: BigInt
): AiCooRoyaltyDataSet {
  let aiCooRoyaltyDataSetEvent = changetype<AiCooRoyaltyDataSet>(newMockEvent())

  aiCooRoyaltyDataSetEvent.parameters = new Array()

  aiCooRoyaltyDataSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  aiCooRoyaltyDataSetEvent.parameters.push(
    new ethereum.EventParam(
      "royaltyAddr",
      ethereum.Value.fromAddress(royaltyAddr)
    )
  )
  aiCooRoyaltyDataSetEvent.parameters.push(
    new ethereum.EventParam(
      "percentage",
      ethereum.Value.fromUnsignedBigInt(percentage)
    )
  )
  aiCooRoyaltyDataSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return aiCooRoyaltyDataSetEvent
}

export function createBaseInitializedEvent(
  name: string,
  symbol: string,
  timestamp: BigInt
): BaseInitialized {
  let baseInitializedEvent = changetype<BaseInitialized>(newMockEvent())

  baseInitializedEvent.parameters = new Array()

  baseInitializedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  baseInitializedEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  baseInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return baseInitializedEvent
}

export function createBurnNFTFromCollectionEvent(
  collectionId: BigInt,
  nftId: BigInt,
  burner: Address,
  owner: Address,
  timestamp: BigInt
): BurnNFTFromCollection {
  let burnNftFromCollectionEvent = changetype<BurnNFTFromCollection>(
    newMockEvent()
  )

  burnNftFromCollectionEvent.parameters = new Array()

  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam("burner", ethereum.Value.fromAddress(burner))
  )
  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  burnNftFromCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return burnNftFromCollectionEvent
}

export function createCollectionFeeAddressSetEvent(
  caller: Address,
  prevMaxBaseRoyalty: Address,
  newMaxBaseRoyalty: Address,
  timestamp: BigInt
): CollectionFeeAddressSet {
  let collectionFeeAddressSetEvent = changetype<CollectionFeeAddressSet>(
    newMockEvent()
  )

  collectionFeeAddressSetEvent.parameters = new Array()

  collectionFeeAddressSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  collectionFeeAddressSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevMaxBaseRoyalty",
      ethereum.Value.fromAddress(prevMaxBaseRoyalty)
    )
  )
  collectionFeeAddressSetEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxBaseRoyalty",
      ethereum.Value.fromAddress(newMaxBaseRoyalty)
    )
  )
  collectionFeeAddressSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return collectionFeeAddressSetEvent
}

export function createCreateCollectionFeeSetEvent(
  caller: Address,
  prevMaxBaseRoyalty: BigInt,
  newMaxBaseRoyalty: BigInt,
  timestamp: BigInt
): CreateCollectionFeeSet {
  let createCollectionFeeSetEvent = changetype<CreateCollectionFeeSet>(
    newMockEvent()
  )

  createCollectionFeeSetEvent.parameters = new Array()

  createCollectionFeeSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  createCollectionFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(prevMaxBaseRoyalty)
    )
  )
  createCollectionFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(newMaxBaseRoyalty)
    )
  )
  createCollectionFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return createCollectionFeeSetEvent
}

export function createDerivedNFTInitializedEvent(
  collectionId: BigInt,
  timestamp: BigInt
): DerivedNFTInitialized {
  let derivedNftInitializedEvent = changetype<DerivedNFTInitialized>(
    newMockEvent()
  )

  derivedNftInitializedEvent.parameters = new Array()

  derivedNftInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  derivedNftInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return derivedNftInitializedEvent
}

export function createDerivedRuleModuleWhitelistedEvent(
  derivedRuleModule: Address,
  whitelist: boolean,
  timestamp: BigInt
): DerivedRuleModuleWhitelisted {
  let derivedRuleModuleWhitelistedEvent = changetype<
    DerivedRuleModuleWhitelisted
  >(newMockEvent())

  derivedRuleModuleWhitelistedEvent.parameters = new Array()

  derivedRuleModuleWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedRuleModule",
      ethereum.Value.fromAddress(derivedRuleModule)
    )
  )
  derivedRuleModuleWhitelistedEvent.parameters.push(
    new ethereum.EventParam("whitelist", ethereum.Value.fromBoolean(whitelist))
  )
  derivedRuleModuleWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return derivedRuleModuleWhitelistedEvent
}

export function createEmergencyAdminSetEvent(
  caller: Address,
  oldEmergencyAdmin: Address,
  newEmergencyAdmin: Address,
  timestamp: BigInt
): EmergencyAdminSet {
  let emergencyAdminSetEvent = changetype<EmergencyAdminSet>(newMockEvent())

  emergencyAdminSetEvent.parameters = new Array()

  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldEmergencyAdmin",
      ethereum.Value.fromAddress(oldEmergencyAdmin)
    )
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "newEmergencyAdmin",
      ethereum.Value.fromAddress(newEmergencyAdmin)
    )
  )
  emergencyAdminSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return emergencyAdminSetEvent
}

export function createFeeModuleBaseConstructedEvent(
  moduleGlobals: Address,
  timestamp: BigInt
): FeeModuleBaseConstructed {
  let feeModuleBaseConstructedEvent = changetype<FeeModuleBaseConstructed>(
    newMockEvent()
  )

  feeModuleBaseConstructedEvent.parameters = new Array()

  feeModuleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam(
      "moduleGlobals",
      ethereum.Value.fromAddress(moduleGlobals)
    )
  )
  feeModuleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return feeModuleBaseConstructedEvent
}

export function createGovernanceSetEvent(
  caller: Address,
  prevGovernance: Address,
  newGovernance: Address,
  timestamp: BigInt
): GovernanceSet {
  let governanceSetEvent = changetype<GovernanceSet>(newMockEvent())

  governanceSetEvent.parameters = new Array()

  governanceSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevGovernance",
      ethereum.Value.fromAddress(prevGovernance)
    )
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "newGovernance",
      ethereum.Value.fromAddress(newGovernance)
    )
  )
  governanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return governanceSetEvent
}

export function createMaxRoyaltySetEvent(
  caller: Address,
  prevMaxBaseRoyalty: BigInt,
  newMaxBaseRoyalty: BigInt,
  timestamp: BigInt
): MaxRoyaltySet {
  let maxRoyaltySetEvent = changetype<MaxRoyaltySet>(newMockEvent())

  maxRoyaltySetEvent.parameters = new Array()

  maxRoyaltySetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  maxRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "prevMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(prevMaxBaseRoyalty)
    )
  )
  maxRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxBaseRoyalty",
      ethereum.Value.fromUnsignedBigInt(newMaxBaseRoyalty)
    )
  )
  maxRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return maxRoyaltySetEvent
}

export function createModuleBaseConstructedEvent(
  aiCooHub: Address,
  timestamp: BigInt
): ModuleBaseConstructed {
  let moduleBaseConstructedEvent = changetype<ModuleBaseConstructed>(
    newMockEvent()
  )

  moduleBaseConstructedEvent.parameters = new Array()

  moduleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam("aiCooHub", ethereum.Value.fromAddress(aiCooHub))
  )
  moduleBaseConstructedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleBaseConstructedEvent
}

export function createModuleGlobalsCurrencyWhitelistedEvent(
  currency: Address,
  prevWhitelisted: boolean,
  whitelisted: boolean,
  timestamp: BigInt
): ModuleGlobalsCurrencyWhitelisted {
  let moduleGlobalsCurrencyWhitelistedEvent = changetype<
    ModuleGlobalsCurrencyWhitelisted
  >(newMockEvent())

  moduleGlobalsCurrencyWhitelistedEvent.parameters = new Array()

  moduleGlobalsCurrencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  moduleGlobalsCurrencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "prevWhitelisted",
      ethereum.Value.fromBoolean(prevWhitelisted)
    )
  )
  moduleGlobalsCurrencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "whitelisted",
      ethereum.Value.fromBoolean(whitelisted)
    )
  )
  moduleGlobalsCurrencyWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleGlobalsCurrencyWhitelistedEvent
}

export function createModuleGlobalsGovernanceSetEvent(
  prevGovernance: Address,
  newGovernance: Address,
  timestamp: BigInt
): ModuleGlobalsGovernanceSet {
  let moduleGlobalsGovernanceSetEvent = changetype<ModuleGlobalsGovernanceSet>(
    newMockEvent()
  )

  moduleGlobalsGovernanceSetEvent.parameters = new Array()

  moduleGlobalsGovernanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevGovernance",
      ethereum.Value.fromAddress(prevGovernance)
    )
  )
  moduleGlobalsGovernanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "newGovernance",
      ethereum.Value.fromAddress(newGovernance)
    )
  )
  moduleGlobalsGovernanceSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleGlobalsGovernanceSetEvent
}

export function createModuleGlobalsTreasuryFeeSetEvent(
  prevTreasuryFee: i32,
  newTreasuryFee: i32,
  timestamp: BigInt
): ModuleGlobalsTreasuryFeeSet {
  let moduleGlobalsTreasuryFeeSetEvent = changetype<
    ModuleGlobalsTreasuryFeeSet
  >(newMockEvent())

  moduleGlobalsTreasuryFeeSetEvent.parameters = new Array()

  moduleGlobalsTreasuryFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevTreasuryFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(prevTreasuryFee))
    )
  )
  moduleGlobalsTreasuryFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasuryFee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newTreasuryFee))
    )
  )
  moduleGlobalsTreasuryFeeSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleGlobalsTreasuryFeeSetEvent
}

export function createModuleGlobalsTreasurySetEvent(
  prevTreasury: Address,
  newTreasury: Address,
  timestamp: BigInt
): ModuleGlobalsTreasurySet {
  let moduleGlobalsTreasurySetEvent = changetype<ModuleGlobalsTreasurySet>(
    newMockEvent()
  )

  moduleGlobalsTreasurySetEvent.parameters = new Array()

  moduleGlobalsTreasurySetEvent.parameters.push(
    new ethereum.EventParam(
      "prevTreasury",
      ethereum.Value.fromAddress(prevTreasury)
    )
  )
  moduleGlobalsTreasurySetEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasury",
      ethereum.Value.fromAddress(newTreasury)
    )
  )
  moduleGlobalsTreasurySetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return moduleGlobalsTreasurySetEvent
}

export function createNewCollectionCreatedEvent(
  collectionOwner: Address,
  collectionId: BigInt,
  baseRoyalty: BigInt,
  collectionType: i32,
  derivedCollectionAddr: Address,
  collInfoURI: string,
  derivedRuleModule: Address,
  timestamp: BigInt
): NewCollectionCreated {
  let newCollectionCreatedEvent = changetype<NewCollectionCreated>(
    newMockEvent()
  )

  newCollectionCreatedEvent.parameters = new Array()

  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionOwner",
      ethereum.Value.fromAddress(collectionOwner)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "baseRoyalty",
      ethereum.Value.fromUnsignedBigInt(baseRoyalty)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(collectionType))
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedCollectionAddr",
      ethereum.Value.fromAddress(derivedCollectionAddr)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collInfoURI",
      ethereum.Value.fromString(collInfoURI)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedRuleModule",
      ethereum.Value.fromAddress(derivedRuleModule)
    )
  )
  newCollectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return newCollectionCreatedEvent
}

export function createNewCollectionMintInfoEvent(
  collectionId: BigInt,
  mintLimit: BigInt,
  mintExpired: BigInt,
  mintPrice: BigInt,
  whiteListRootHash: Bytes
): NewCollectionMintInfo {
  let newCollectionMintInfoEvent = changetype<NewCollectionMintInfo>(
    newMockEvent()
  )

  newCollectionMintInfoEvent.parameters = new Array()

  newCollectionMintInfoEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  newCollectionMintInfoEvent.parameters.push(
    new ethereum.EventParam(
      "mintLimit",
      ethereum.Value.fromUnsignedBigInt(mintLimit)
    )
  )
  newCollectionMintInfoEvent.parameters.push(
    new ethereum.EventParam(
      "mintExpired",
      ethereum.Value.fromUnsignedBigInt(mintExpired)
    )
  )
  newCollectionMintInfoEvent.parameters.push(
    new ethereum.EventParam(
      "mintPrice",
      ethereum.Value.fromUnsignedBigInt(mintPrice)
    )
  )
  newCollectionMintInfoEvent.parameters.push(
    new ethereum.EventParam(
      "whiteListRootHash",
      ethereum.Value.fromFixedBytes(whiteListRootHash)
    )
  )

  return newCollectionMintInfoEvent
}

export function createNewNFTCreatedEvent(
  tokenId: BigInt,
  collectionId: BigInt,
  derivedFrom: BigInt,
  nftInfoURI: string
): NewNFTCreated {
  let newNftCreatedEvent = changetype<NewNFTCreated>(newMockEvent())

  newNftCreatedEvent.parameters = new Array()

  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "derivedFrom",
      ethereum.Value.fromUnsignedBigInt(derivedFrom)
    )
  )
  newNftCreatedEvent.parameters.push(
    new ethereum.EventParam("nftInfoURI", ethereum.Value.fromString(nftInfoURI))
  )

  return newNftCreatedEvent
}

export function createStateSetEvent(
  caller: Address,
  prevState: i32,
  newState: i32,
  timestamp: BigInt
): StateSet {
  let stateSetEvent = changetype<StateSet>(newMockEvent())

  stateSetEvent.parameters = new Array()

  stateSetEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "prevState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(prevState))
    )
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "newState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newState))
    )
  )
  stateSetEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return stateSetEvent
}
