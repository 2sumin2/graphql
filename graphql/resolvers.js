import { getUsers, addUser, deleteUser } from "./db.js";

const resolvers = {
    Query: {
        users: () => getUsers(),

    },
    Mutation: {
        addUser: (_, { email, statement, username, password }) => addUser(email, statement, username, password),
        deleteUser: (_, { username }) => deleteUser(username)
    }
};

export default resolvers;