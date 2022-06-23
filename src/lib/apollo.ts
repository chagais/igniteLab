import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r3abxc0kge01z1h0tmahpl/master',
    cache: new InMemoryCache()
})