import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Product {
    id: ID!
    code: String
    name: String
    inventory: Int
    available: Boolean
  }

  input ProductInput {
    code: String
    name: String
    inventory: Int
    available: Boolean
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    addProduct(content: ProductInput): Product
  }
`

export default typeDefs
