const { gql } = require('apollo-server')

const typeDefs = gql`

  type Ingredient {
    id: ID!
    name: String!
    quantity: Float
  }
  
  type Query {
    ingredients: [Ingredient!]!
    ingredient(id: ID!): Ingredient
  }
  
  type Mutation {
    createIngredient(name: String!, quantity: Float!): Ingredient!
  }

`
