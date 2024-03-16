const {gql} = require("apollo-server-express")

const typeDefs = gql `
  type Query {
    audios: [Audio!]!
    types: [Type!]! 
  }
`