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

const ingredients = [
  {
    id: 1,
    name: 'Black Pepper',
    quantity: 12.5 
  },
  {
    id: 2,
    name: 'White onions',
    quantity: 3
  },
  {
    id: 3,
    name: 'Mustard',
    quantity: 230 
  }
]
