/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuction = /* GraphQL */ `
  subscription OnCreateAuction($owner: String) {
    onCreateAuction(owner: $owner) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
        startedAt
      }
      bids {
        items {
          id
          auctionID
          value
          unit
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateAuction = /* GraphQL */ `
  subscription OnUpdateAuction($owner: String) {
    onUpdateAuction(owner: $owner) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
        startedAt
      }
      bids {
        items {
          id
          auctionID
          value
          unit
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteAuction = /* GraphQL */ `
  subscription OnDeleteAuction($owner: String) {
    onDeleteAuction(owner: $owner) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
        startedAt
      }
      bids {
        items {
          id
          auctionID
          value
          unit
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateAuctionable = /* GraphQL */ `
  subscription OnCreateAuctionable($owner: String) {
    onCreateAuctionable(owner: $owner) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        auctionables {
          nextToken
          startedAt
        }
        bids {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateAuctionable = /* GraphQL */ `
  subscription OnUpdateAuctionable($owner: String) {
    onUpdateAuctionable(owner: $owner) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        auctionables {
          nextToken
          startedAt
        }
        bids {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteAuctionable = /* GraphQL */ `
  subscription OnDeleteAuctionable($owner: String) {
    onDeleteAuctionable(owner: $owner) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        auctionables {
          nextToken
          startedAt
        }
        bids {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onCreateAuctionBid = /* GraphQL */ `
  subscription OnCreateAuctionBid($owner: String) {
    onCreateAuctionBid(owner: $owner) {
      id
      auctionID
      value
      unit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        auctionables {
          nextToken
          startedAt
        }
        bids {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateAuctionBid = /* GraphQL */ `
  subscription OnUpdateAuctionBid($owner: String) {
    onUpdateAuctionBid(owner: $owner) {
      id
      auctionID
      value
      unit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        auctionables {
          nextToken
          startedAt
        }
        bids {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteAuctionBid = /* GraphQL */ `
  subscription OnDeleteAuctionBid($owner: String) {
    onDeleteAuctionBid(owner: $owner) {
      id
      auctionID
      value
      unit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        auctionables {
          nextToken
          startedAt
        }
        bids {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
