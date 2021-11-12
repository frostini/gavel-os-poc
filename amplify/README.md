take 1st pomo to clean up notes
add hook 




auctions
?
  mechanism
  status
  name

<!-- APPSYNC QUERY -->
query MyQuery {
  listAuctions(filter: {status: {eq: live}, name: {contains: "s"}}) {
    items {
      id
      name
      status
    }
  }
}
<!-- API query equivalent -->

https://docs.amplify.aws/lib/graphqlapi/query-data/q/platform/js/#compound-filters
const { data: { listProducts: { items: itemsPage1, nextToken } } } = await API.graphql({ query: listProducts, variables: { limit: 20, /* add filter as needed */ }}));
 



{ match: "Stream" }


query MyQuery {
  listAuctions(filter: {
      name: {
      	contains: "s"
      }}){
    items{
      id
      name
    }
  }
}







new
add key
  auctionBycategory
  auctionByPrice
    highestBid

?can you index a connection to sort by default


add/load image in query

auctions/:id
auctions/new
auctions/:id/bids/create
auctions/:id/bids/:id
auctions/:id/bids
auctions/:id/fulfill/:flow/:step

---
NET NEW
----

organizations/
organizations/:id
organizations/create/:step

user/
user/auctions
  bidded
  active/past
user/favorites
  active/past
user/bids
  all
user/items
  all




mutation MyMutation {
  createAuctionBid(
    input: {
      auctionID: "ae5636f9-4826-455c-9f4d-e973e32e69dd",
      value: 5.5,
      unit: "USD"
    }) {
    id
    auctionID
    value
    unit
  }
}


query MyQuery {
  listAuctions {
    items {
      name
      id
      bids {
        items {
          auctionID
          id
          unit
          value
        }
      }
    }
  }
}






add list view of high level attributes and actions
  update card/ui elements to match with better auction details
  update query loading this data to the cards and related object infrastructure

https://docs.amplify.aws/cli/graphql-transformer/connection/#many-to-many-connections
https://docs.amplify.aws/cli/graphql-transformer/dataaccess/

Load seed data and test API
  Test graphql API on appsync graphql interface
    Create mutations (baseline of 5 entries)
    Create queries
      Basic loading of data with a pagination
      Basic query with filter/by id
      Basic query with sort asc by newest
      Basic query with sort desc by newest
      Basic query with ending soon


https://docs.amplify.aws/cli/graphql-transformer/auth/#definition
Look into authentication of the model to be created with user id as well and be attributable
  -for use with -auction, -bid, -house

https://nextjs.org/docs/routing/dynamic-routes
Add query parameters to URL of route for search
  update page routes/components  
  plug in filter functionality
  https://react-query.tanstack.com/examples/custom-hooks

check naming of components and conventions to update/clean
  update UI for final user experience
  update for responsiveness in mobile and desktop versions

Add skeleton/placeholder data to form elements
  https://skeletonreact.com/

add authenticated user menus/off canvas options


AMPLIFY QUERYING AND STUFF
https://stackoverflow.com/questions/62867425/sorting-results-in-aws-amplify-graphql-without-filtering

https://stackoverflow.com/questions/57529979/how-to-use-the-filter-variable-on-graphql-query-under-the-connect-component

https://stackoverflow.com/questions/54289250/how-to-serverside-order-sort-query-results-in-amplify-cli

https://stackoverflow.com/questions/67502148/filtering-list-query-by-another-tables-field-a-k-a-cross-table-or-nested-filte

USE CONTEXT AND STUFF
https://dev.to/reedbarger/react-context-for-beginners-the-complete-guide-2021-56me#you-may-not-need-context

https://kentcdodds.com/blog/application-state-management-with-react

https://dev.to/sakethkowtha/creating-own-react-redux-using-context-api-in-react-52am

https://dev.to/ms_yogii/usecontext-for-better-state-management-51hi

https://tyrannosaurustech.com/blog/global-state-management-with-react-hooks-and-context/

https://dev.to/trishathecookie/react-creating-a-reusable-form-using-react-context-5eof

https://endertech.com/blog/using-reacts-context-api-for-global-state-management

https://stackoverflow.com/questions/60866924/how-to-pass-multiple-states-through-react-context-api

https://stackoverflow.com/questions/54119268/how-to-use-react-hooks-context-with-multiple-values-for-providers

https://stackoverflow.com/questions/68221270/passing-multiple-states-in-react-context

GENERAL AMPLIFY API
https://www.velotio.com/engineering-blog/real-time-react-app-built-using-aws-amplify-graphql

https://dev.to/dev_sahan/complete-guide-to-amplify-and-next-js-4318

https://github.com/aws-amplify/amplify-js/issues/1324


RENDER PROPS VS HOOKS
https://reactjs.org/docs/render-props.html
https://medium.com/@seanmcp/how-to-create-a-render-prop-component-aa3ff54443e6
https://flexiple.com/react/render-props-an-advanced-react-pattern/
https://blog.logrocket.com/react-render-props-vs-custom-hooks/



Access Patterns

Auctions

Actions/Stories
Authorization/Roles/Users

Scenes
Routes

Models
  Names
  Attributes
  Methods
  Associations
Libs

Tests
Design
StoryBook



seller
room
cellar
gallery
org
auctioneer
house


https://demoair.wondershare.com/
https://www.wondershare.com/products-solutions/all-products.html?_ga=2.180186022.306634846.1636662264-888503875.1636662264
