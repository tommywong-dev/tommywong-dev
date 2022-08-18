import { GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient(import.meta.env.VITE_HYGRAPH_CONTENT_API);

export default graphQLClient;
