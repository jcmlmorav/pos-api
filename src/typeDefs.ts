import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Post {
        id: ID!
        name: String
        description: String
        tags: [String]
        image: String
    }

    type Query {
        posts: [Post]
    }
`;

export default typeDefs;
