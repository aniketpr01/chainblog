import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
uri: "https://api.studio.thegraph.com/query/42411/blogging-dapp/v0.0.5",
cache: new InMemoryCache(),
});

import { createClient } from 'urql'

const APIURL =
  'https://api.studio.thegraph.com/query/42411/blogging-dapp/v0.0.5'

const tokensQuery = `
  query {
    postAddeds(first: 5) {
      id
      postId
      author
      imageUrl
      imageName
      assetId
      playbackId
      title
      text
      blockTimestamp
    }
  }
`

const postsData = await client.query(tokensQuery).toPromise()

export default client;