import { QueryClient } from 'react-query';
import { GraphQLClient } from 'graphql-request';

// Client
export const client = new GraphQLClient(process.env.wpGraphqlUrl, { headers: {} });

// Query Client
export const queryClient = new QueryClient();
