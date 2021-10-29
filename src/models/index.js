// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AuctionType = {
  "DUTCH": "dutch",
  "ENGLISH": "english",
  "TEXAS": "texas"
};

const UnitType = {
  "ITEM": "item",
  "PALLET": "pallet",
  "CONTAINER": "container",
  "POUND": "pound",
  "KILO": "kilo",
  "GRAM": "gram",
  "OUNCE": "ounce",
  "TON": "ton"
};

const { Auction, Auctionable, AuctionBid, S3Object } = initSchema(schema);

export {
  Auction,
  Auctionable,
  AuctionBid,
  AuctionType,
  UnitType,
  S3Object
};