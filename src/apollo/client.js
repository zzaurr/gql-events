import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://api.beta.ultie.org/graphql",
  cache: new InMemoryCache(),
});

export default client;