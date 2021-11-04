/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuction = /* GraphQL */ `
  query GetAuction($id: ID!) {
    getAuction(id: $id) {
      id
      name
      status
      mechanism
      startDateTime
      publishDateTime
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
          createdAt
          updatedAt
        }
        nextToken
      }
      bids {
        items {
          id
          auctionID
          value
          unit
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        status
        mechanism
        startDateTime
        publishDateTime
        description
        image {
          bucket
          region
          key
        }
        deliveryTerms
        auctionables {
          nextToken
        }
        bids {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
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
      auction {
        id
        name
        status
        mechanism
        startDateTime
        publishDateTime
        description
        image {
          bucket
          region
          key
        }
        deliveryTerms
        auctionables {
          nextToken
        }
        bids {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
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
        auction {
          id
          name
          status
          mechanism
          startDateTime
          publishDateTime
          description
          deliveryTerms
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuctionBid = /* GraphQL */ `
  query GetAuctionBid($id: ID!) {
    getAuctionBid(id: $id) {
      id
      auctionID
      value
      unit
      auction {
        id
        name
        status
        mechanism
        startDateTime
        publishDateTime
        description
        image {
          bucket
          region
          key
        }
        deliveryTerms
        auctionables {
          nextToken
        }
        bids {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
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
        value
        unit
        auction {
          id
          name
          status
          mechanism
          startDateTime
          publishDateTime
          description
          deliveryTerms
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const auctionsByMechanism = /* GraphQL */ `
  query AuctionsByMechanism(
    $mechanism: AuctionType
    $sortDirection: ModelSortDirection
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    auctionsByMechanism(
      mechanism: $mechanism
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        status
        mechanism
        startDateTime
        publishDateTime
        description
        image {
          bucket
          region
          key
        }
        deliveryTerms
        auctionables {
          nextToken
        }
        bids {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const auctionsByStatus = /* GraphQL */ `
  query AuctionsByStatus(
    $status: AuctionStatusType
    $sortDirection: ModelSortDirection
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    auctionsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        status
        mechanism
        startDateTime
        publishDateTime
        description
        image {
          bucket
          region
          key
        }
        deliveryTerms
        auctionables {
          nextToken
        }
        bids {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const auctionsByName = /* GraphQL */ `
  query AuctionsByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    auctionsByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        status
        mechanism
        startDateTime
        publishDateTime
        description
        image {
          bucket
          region
          key
        }
        deliveryTerms
        auctionables {
          nextToken
        }
        bids {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
