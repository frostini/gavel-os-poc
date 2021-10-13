/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncAuctions = /* GraphQL */ `
  query SyncAuctions(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuctions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        mechanism
        startDateTime
        description
        image {
          bucket
          region
          key
        }
        deliveryTerms
        auctionables {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAuction = /* GraphQL */ `
  query GetAuction($id: ID!) {
    getAuction(id: $id) {
      id
      name
      mechanism
      startDateTime
      description
      image {
        bucket
        region
        key
      }
      deliveryTerms
      auctionables {
        items {
          id
          content
          description
          auctionID
          quantity
          unit
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listAuctions = /* GraphQL */ `
  query ListAuctions(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mechanism
        startDateTime
        description
        image {
          bucket
          region
          key
        }
        deliveryTerms
        auctionables {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuctionables = /* GraphQL */ `
  query SyncAuctionables(
    $filter: ModelAuctionableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuctionables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        description
        auctionID
        quantity
        unit
        image {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAuctionable = /* GraphQL */ `
  query GetAuctionable($id: ID!) {
    getAuctionable(id: $id) {
      id
      content
      description
      auctionID
      quantity
      unit
      image {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listAuctionables = /* GraphQL */ `
  query ListAuctionables(
    $filter: ModelAuctionableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctionables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        description
        auctionID
        quantity
        unit
        image {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
