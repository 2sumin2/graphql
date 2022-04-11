import { createServer } from '@graphql-yoga/node';
import resolvers from './graphql/resolvers.js';

// Create your server
const server = createServer({
    schema: {
        typeDefs:
            `type Movie {
                id:Int!
            name:String!,
            age: Int!,
            score: Int!
        } 
        type Query {
        movies: [Movie]!
        movie(id: Int!): Movie
        }
        type Mutation{
            addMovie(name:String!, score:Int!): Movie!,
            deleteMovie(id:Int!): Boolean!
        }`,
        resolvers
    }

});
// start the server and explore http://localhost:4000/graphql
server.start(); 