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
export const updateAuction = /* GraphQL */ `
  mutation UpdateAuction(
    $input: UpdateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    updateAuction(input: $input, condition: $condition) {
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
export const deleteAuction = /* GraphQL */ `
  mutation DeleteAuction(
    $input: DeleteAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    deleteAuction(input: $input, condition: $condition) {
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
export const createAuctionBid = /* GraphQL */ `
  mutation CreateAuctionBid(
    $input: CreateAuctionBidInput!
    $condition: ModelAuctionBidConditionInput
  ) {
    createAuctionBid(input: $input, condition: $condition) {
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
export const updateAuctionBid = /* GraphQL */ `
  mutation UpdateAuctionBid(
    $input: UpdateAuctionBidInput!
    $condition: ModelAuctionBidConditionInput
  ) {
    updateAuctionBid(input: $input, condition: $condition) {
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
export const deleteAuctionBid = /* GraphQL */ `
  mutation DeleteAuctionBid(
    $input: DeleteAuctionBidInput!
    $condition: ModelAuctionBidConditionInput
  ) {
    deleteAuctionBid(input: $input, condition: $condition) {
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
