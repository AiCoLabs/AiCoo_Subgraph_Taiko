import { Bytes, store } from "@graphprotocol/graph-ts"
import {
  AiCooRoyaltyDataSet as AiCooRoyaltyDataSetEvent,
  BaseInitialized as BaseInitializedEvent,
  BurnNFTFromCollection as BurnNFTFromCollectionEvent,
  CollectionFeeAddressSet as CollectionFeeAddressSetEvent,
  CreateCollectionFeeSet as CreateCollectionFeeSetEvent,
  DerivedNFTInitialized as DerivedNFTInitializedEvent,
  DerivedRuleModuleWhitelisted as DerivedRuleModuleWhitelistedEvent,
  EmergencyAdminSet as EmergencyAdminSetEvent,
  FeeModuleBaseConstructed as FeeModuleBaseConstructedEvent,
  GovernanceSet as GovernanceSetEvent,
  MaxRoyaltySet as MaxRoyaltySetEvent,
  ModuleBaseConstructed as ModuleBaseConstructedEvent,
  ModuleGlobalsCurrencyWhitelisted as ModuleGlobalsCurrencyWhitelistedEvent,
  ModuleGlobalsGovernanceSet as ModuleGlobalsGovernanceSetEvent,
  ModuleGlobalsTreasuryFeeSet as ModuleGlobalsTreasuryFeeSetEvent,
  ModuleGlobalsTreasurySet as ModuleGlobalsTreasurySetEvent,
  NewCollectionCreated as NewCollectionCreatedEvent,
  NewCollectionMintInfo as NewCollectionMintInfoEvent,
  NewNFTCreated as NewNFTCreatedEvent,
  StateSet as StateSetEvent
} from "../generated/AiCooHub/AiCooHub"
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
} from "../generated/schema"

export function handleAiCooRoyaltyDataSet(
  event: AiCooRoyaltyDataSetEvent
): void {
  let entity = new AiCooRoyaltyDataSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.royaltyAddr = event.params.royaltyAddr
  entity.percentage = event.params.percentage
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBaseInitialized(event: BaseInitializedEvent): void {
  let entity = new BaseInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurnNFTFromCollection(
  event: BurnNFTFromCollectionEvent
): void {

  let nft = NewNFTCreated.load(Bytes.fromUint8Array(event.params.collectionId).concat(Bytes.fromUint8Array(event.params.nftId)))
  if(nft != null){
    nft.nftInfoURI = ""
    nft.creator = event.params.burner
    nft.blockNumber = event.block.number
    nft.blockTimestamp = event.block.timestamp
    nft.transactionHash = event.transaction.hash
    nft.save()
    // store.remove('NewNFTCreated', Bytes.fromUint8Array(event.params.collectionId).concat(Bytes.fromUint8Array(event.params.nftId)).toHexString());
  }

  let entity = new BurnNFTFromCollection(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionId = event.params.collectionId
  entity.nftId = event.params.nftId
  entity.burner = event.params.burner
  entity.owner = event.params.owner
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectionFeeAddressSet(
  event: CollectionFeeAddressSetEvent
): void {
  let entity = new CollectionFeeAddressSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevMaxBaseRoyalty = event.params.prevMaxBaseRoyalty
  entity.newMaxBaseRoyalty = event.params.newMaxBaseRoyalty
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateCollectionFeeSet(
  event: CreateCollectionFeeSetEvent
): void {
  let entity = new CreateCollectionFeeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevMaxBaseRoyalty = event.params.prevMaxBaseRoyalty
  entity.newMaxBaseRoyalty = event.params.newMaxBaseRoyalty
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDerivedNFTInitialized(
  event: DerivedNFTInitializedEvent
): void {
  let entity = new DerivedNFTInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionId = event.params.collectionId
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDerivedRuleModuleWhitelisted(
  event: DerivedRuleModuleWhitelistedEvent
): void {
  let entity = new DerivedRuleModuleWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.derivedRuleModule = event.params.derivedRuleModule
  entity.whitelist = event.params.whitelist
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyAdminSet(event: EmergencyAdminSetEvent): void {
  let entity = new EmergencyAdminSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.oldEmergencyAdmin = event.params.oldEmergencyAdmin
  entity.newEmergencyAdmin = event.params.newEmergencyAdmin
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeModuleBaseConstructed(
  event: FeeModuleBaseConstructedEvent
): void {
  let entity = new FeeModuleBaseConstructed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.moduleGlobals = event.params.moduleGlobals
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovernanceSet(event: GovernanceSetEvent): void {
  let entity = new GovernanceSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevGovernance = event.params.prevGovernance
  entity.newGovernance = event.params.newGovernance
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxRoyaltySet(event: MaxRoyaltySetEvent): void {
  let entity = new MaxRoyaltySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevMaxBaseRoyalty = event.params.prevMaxBaseRoyalty
  entity.newMaxBaseRoyalty = event.params.newMaxBaseRoyalty
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleBaseConstructed(
  event: ModuleBaseConstructedEvent
): void {
  let entity = new ModuleBaseConstructed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.aiCooHub = event.params.aiCooHub
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleGlobalsCurrencyWhitelisted(
  event: ModuleGlobalsCurrencyWhitelistedEvent
): void {
  let entity = new ModuleGlobalsCurrencyWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.currency = event.params.currency
  entity.prevWhitelisted = event.params.prevWhitelisted
  entity.whitelisted = event.params.whitelisted
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleGlobalsGovernanceSet(
  event: ModuleGlobalsGovernanceSetEvent
): void {
  let entity = new ModuleGlobalsGovernanceSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevGovernance = event.params.prevGovernance
  entity.newGovernance = event.params.newGovernance
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleGlobalsTreasuryFeeSet(
  event: ModuleGlobalsTreasuryFeeSetEvent
): void {
  let entity = new ModuleGlobalsTreasuryFeeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevTreasuryFee = event.params.prevTreasuryFee
  entity.newTreasuryFee = event.params.newTreasuryFee
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleGlobalsTreasurySet(
  event: ModuleGlobalsTreasurySetEvent
): void {
  let entity = new ModuleGlobalsTreasurySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevTreasury = event.params.prevTreasury
  entity.newTreasury = event.params.newTreasury
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewCollectionCreated(
  event: NewCollectionCreatedEvent
): void {
  let entity = new NewCollectionCreated(
    //event.transaction.hash.concatI32(event.logIndex.toI32())
    Bytes.fromUint8Array(event.params.collectionId)
  )
  entity.collectionOwner = event.params.collectionOwner
  entity.collectionId = event.params.collectionId
  entity.baseRoyalty = event.params.baseRoyalty
  entity.collectionType = event.params.collectionType
  entity.derivedCollectionAddr = event.params.derivedCollectionAddr
  entity.collInfoURI = event.params.collInfoURI
  entity.derivedRuleModule = event.params.derivedRuleModule
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewCollectionMintInfo(
  event: NewCollectionMintInfoEvent
): void {
  let entity = new NewCollectionMintInfo(
    //event.transaction.hash.concatI32(event.logIndex.toI32())
    Bytes.fromUint8Array(event.params.collectionId)
  )
  entity.collectionId = event.params.collectionId
  entity.mintLimit = event.params.mintLimit
  entity.mintExpired = event.params.mintExpired
  entity.mintPrice = event.params.mintPrice
  entity.whiteListRootHash = event.params.whiteListRootHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewNFTCreated(event: NewNFTCreatedEvent): void {
  let entity = new NewNFTCreated(
    Bytes.fromUint8Array(event.params.collectionId).concat(Bytes.fromUint8Array(event.params.tokenId))
    //event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.collectionId = event.params.collectionId
  entity.derivedFrom = event.params.derivedFrom
  entity.creator = event.params.creator
  entity.nftInfoURI = event.params.nftInfoURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStateSet(event: StateSetEvent): void {
  let entity = new StateSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.prevState = event.params.prevState
  entity.newState = event.params.newState
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
