import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AuctionStatusType {
  DRAFT = "draft",
  PREVIEW = "preview",
  LIVE = "live",
  COMPLETE = "complete"
}

export enum AuctionType {
  DUTCH = "dutch",
  ENGLISH = "english",
  TEXAS = "texas"
}

export enum UnitType {
  ITEM = "item",
  PALLET = "pallet",
  CONTAINER = "container",
  POUND = "pound",
  KILO = "kilo",
  GRAM = "gram",
  OUNCE = "ounce",
  TON = "ton"
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

type AuctionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuctionableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuctionBidMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Auction {
  readonly id: string;
  readonly name?: string;
  readonly status?: AuctionStatusType | keyof typeof AuctionStatusType;
  readonly mechanism?: AuctionType | keyof typeof AuctionType;
  readonly startDateTime?: string;
  readonly publishDateTime?: string;
  readonly description?: string;
  readonly image?: S3Object;
  readonly deliveryTerms?: string;
  readonly auctionables?: (Auctionable | null)[];
  readonly bids?: (AuctionBid | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Auction, AuctionMetaData>);
  static copyOf(source: Auction, mutator: (draft: MutableModel<Auction, AuctionMetaData>) => MutableModel<Auction, AuctionMetaData> | void): Auction;
}

export declare class Auctionable {
  readonly id: string;
  readonly content?: string;
  readonly description?: string;
  readonly auctionID?: string;
  readonly quantity?: number;
  readonly unit?: UnitType | keyof typeof UnitType;
  readonly image?: S3Object;
  readonly auction?: Auction;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Auctionable, AuctionableMetaData>);
  static copyOf(source: Auctionable, mutator: (draft: MutableModel<Auctionable, AuctionableMetaData>) => MutableModel<Auctionable, AuctionableMetaData> | void): Auctionable;
}

export declare class AuctionBid {
  readonly id: string;
  readonly auctionID: string;
  readonly value?: number;
  readonly unit?: string;
  readonly auction?: Auction;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AuctionBid, AuctionBidMetaData>);
  static copyOf(source: AuctionBid, mutator: (draft: MutableModel<AuctionBid, AuctionBidMetaData>) => MutableModel<AuctionBid, AuctionBidMetaData> | void): AuctionBid;
}