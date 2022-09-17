import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Product {
        id: ID!
        code: String
        name: String
        inventory: Int
        available: Boolean
    }

    type Query {
        products: [Product]
    }
`;

export default typeDefs;
