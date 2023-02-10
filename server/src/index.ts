import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
// import { typeDefs, resolvers } from './schema';

const typeDefs = `#graphql
  type Contact {
    name: String
    address: String
    phone: String
  }

  type Query {
    contacts: [Contact]
  }
`;

const contacts = [
  {
    name: 'Jane Doe',
    address: '1 Infinite Loop, CA',
    phone: '123-456-7890',
  },
  {
    name: 'Mary Sue',
    address: '221B Baker Street, London',
    phone: '098-765-4321',
  }
];

const resolvers = {
  Query: {
    contacts: () => contacts,
  },
};

interface MyContext {
  token?: string;
}

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  '/',
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000}, resolve));
console.log(`Apollo Server (not express) ready at http://localhost:4000/`);