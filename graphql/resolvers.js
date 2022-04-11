import { getById, people } from "./db.js";

const resolvers = {
    Query: {
        people: () => people,
        person: () => getById()
    }
};

export default resolvers;