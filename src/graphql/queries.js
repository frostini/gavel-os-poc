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
        bids {
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
      bids {
        items {
          id
          auctionID
          userID
          value
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
        bids {
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
export const syncAuctionBids = /* GraphQL */ `
  query SyncAuctionBids(
    $filter: ModelAuctionBidFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuctionBids(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        auctionID
        auction {
          id
          name
          mechanism
          startDateTime
          description
          deliveryTerms
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        value
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
  }
`;
export const getAuctionBid = /* GraphQL */ `
  query GetAuctionBid($id: ID!) {
    getAuctionBid(id: $id) {
      id
      auctionID
      auction {
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
        bids {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userID
      value
      unit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listAuctionBids = /* GraphQL */ `
  query ListAuctionBids(
    $filter: ModelAuctionBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctionBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        auctionID
        auction {
          id
          name
          mechanism
          startDateTime
          description
          deliveryTerms
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        value
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
  }
`;
