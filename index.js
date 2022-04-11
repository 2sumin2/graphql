import { createServer } from '@graphql-yoga/node';
import resolvers from './graphql/resolvers.js';

// Create your server
const server = createServer({
    schema: {
        typeDefs:
            `type Person {
                id:Int!
            name:String!,
            age: Int!,
            gender: String!
        } 
        type Query {
        people: [Person]!
        person(id: Int!): Person
        }`,
        resolvers
    }

});
// start the server and explore http://localhost:4000/graphql
server.start(); 