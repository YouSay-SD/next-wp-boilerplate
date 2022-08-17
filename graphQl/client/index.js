import { QueryClient } from 'react-query';
import { GraphQLClient } from 'graphql-request';

// Client
export const client = new GraphQLClient(process.env.wpGraphqlUrl);

// Query Client
export const queryClient = new QueryClient();
