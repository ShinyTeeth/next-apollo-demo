import { generateContacts } from './data.js';

export const typeDefs = `#graphql
  type Contact {
    name: String
    address: String
    phone: String
  }

  type Query {
    contacts: [Contact]
  }
`;

const contacts = generateContacts(200);

export const resolvers = {
  Query: {
    contacts: () => contacts,
  },
};