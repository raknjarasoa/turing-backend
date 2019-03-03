import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated-prisma-client';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

export default function createServer(): GraphQLServer {
  return new GraphQLServer({
    typeDefs: './src/schema.yoga.graphql',
    resolvers: {
      Query,
      Mutation
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: {
      prisma
    }
  });
}
