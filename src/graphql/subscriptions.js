/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuction = /* GraphQL */ `
  subscription OnCreateAuction {
    onCreateAuction {
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
export const onUpdateAuction = /* GraphQL */ `
  subscription OnUpdateAuction {
    onUpdateAuction {
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
export const onDeleteAuction = /* GraphQL */ `
  subscription OnDeleteAuction {
    onDeleteAuction {
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
export const onCreateAuctionable = /* GraphQL */ `
  subscription OnCreateAuctionable {
    onCreateAuctionable {
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
export const onUpdateAuctionable = /* GraphQL */ `
  subscription OnUpdateAuctionable {
    onUpdateAuctionable {
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
export const onDeleteAuctionable = /* GraphQL */ `
  subscription OnDeleteAuctionable {
    onDeleteAuctionable {
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
export const onCreateAuctionBid = /* GraphQL */ `
  subscription OnCreateAuctionBid {
    onCreateAuctionBid {
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
export const onUpdateAuctionBid = /* GraphQL */ `
  subscription OnUpdateAuctionBid {
    onUpdateAuctionBid {
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
export const onDeleteAuctionBid = /* GraphQL */ `
  subscription OnDeleteAuctionBid {
    onDeleteAuctionBid {
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
