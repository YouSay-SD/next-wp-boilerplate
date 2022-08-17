import { QueryClient } from 'react-query';
import { GraphQLClient } from 'graphql-request';

// Client
// export const client = new GraphQLClient(process.env.wpGraphqlUrl, { headers: {
//   'Access-Control-Allow-Origin': '*',
//   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
// } });
export const client = new GraphQLClient(process.env.wpGraphqlUrl);

// Query Client
export const queryClient = new QueryClient();
