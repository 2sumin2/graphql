import { createServer } from '@graphql-yoga/node';
import resolvers from './graphql/resolvers.js';

// Create your server
const server = createServer({
    schema: {
        typeDefs:
            `type User {
            id: Int!,
            email: String!,
            statement: String!,
            username: String!,
            password: String!
        } 
        type Query {
            users: [User]!
        }
        type Mutation{
            addUser(email: String!,
                statement: String!,
                username: String!,
                password: String!
            ) : User!,
            deleteUser(username:String!): Boolean!
        }`,
        resolvers
    }

});
// start the server and explore http://localhost:4000/graphql
server.start(); 