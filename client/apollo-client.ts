import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://faker-graphql.now.sh/graphql',
    cache: new InMemoryCache(),
});

export default client;