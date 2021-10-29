/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuction = /* GraphQL */ `
  mutation CreateAuction(
    $input: CreateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    createAuction(input: $input, condition: $condition) {
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
export const updateAuction = /* GraphQL */ `
  mutation UpdateAuction(
    $input: UpdateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    updateAuction(input: $input, condition: $condition) {
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
export const deleteAuction = /* GraphQL */ `
  mutation DeleteAuction(
    $input: DeleteAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    deleteAuction(input: $input, condition: $condition) {
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
export const createAuctionable = /* GraphQL */ `
  mutation CreateAuctionable(
    $input: CreateAuctionableInput!
    $condition: ModelAuctionableConditionInput
  ) {
    createAuctionable(input: $input, condition: $condition) {
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
export const updateAuctionable = /* GraphQL */ `
  mutation UpdateAuctionable(
    $input: UpdateAuctionableInput!
    $condition: ModelAuctionableConditionInput
  ) {
    updateAuctionable(input: $input, condition: $condition) {
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
export const deleteAuctionable = /* GraphQL */ `
  mutation DeleteAuctionable(
    $input: DeleteAuctionableInput!
    $condition: ModelAuctionableConditionInput
  ) {
    deleteAuctionable(input: $input, condition: $condition) {
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
export const createAuctionBid = /* GraphQL */ `
  mutation CreateAuctionBid(
    $input: CreateAuctionBidInput!
    $condition: ModelAuctionBidConditionInput
  ) {
    createAuctionBid(input: $input, condition: $condition) {
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
export const updateAuctionBid = /* GraphQL */ `
  mutation UpdateAuctionBid(
    $input: UpdateAuctionBidInput!
    $condition: ModelAuctionBidConditionInput
  ) {
    updateAuctionBid(input: $input, condition: $condition) {
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
export const deleteAuctionBid = /* GraphQL */ `
  mutation DeleteAuctionBid(
    $input: DeleteAuctionBidInput!
    $condition: ModelAuctionBidConditionInput
  ) {
    deleteAuctionBid(input: $input, condition: $condition) {
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
