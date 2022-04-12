const typeDefs =
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
    ): User!,
    deleteUser(username: String!): Boolean!
}`
    ;

export default typeDefs;