import { createServer } from '@graphql-yoga/node';
import resolvers from './graphql/resolvers.js';
import typeDefs from './graphql/typeDefs.js';

// Create your server

const server = createServer({
    schema: {
        typeDefs,
        resolvers
    }
});
// start the server and explore http://localhost:4000/graphql
server.start(); 