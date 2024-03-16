const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    audios: [Audio!]!
    types: [Type!]!
  }

  type Audio {
    # general data
    _id: ID!
    title: String!
    date_production: String!
    productors: [String!]
    nbr_invoice: String!
    nbr_contract: String!
    type_support: String!
    nbr_support: String!
    tech_comments: String
    quality: String!
    language: String!
    frequency: String!
    format: String!
    synopsis: String
    version: String
    event_location: String
    event_date: String
    sequence: String
    genres: [String!]!
    
    
    # based on this
    type: String!
    
    # ill show one of these
    
  }

  type Type {
    _id: ID!
    name: String
    description: String
  }

  type Mutation {
    createAudio(audioInput: AudioInput!): Audio!
    createType(typeInput: TypeInput!): Type!
  }

  input AudioInput {
    title: String!
    date_production: String!
    productors: [String!]!
    nbr_invoice: String!
    nbr_contract: String!
    type_support: String!
    nbr_support: String!
    tech_comments: String
    quality: String!
    language: String!
    frequency: String!
    synopsis: String
    format: String!
    version: String
    event_location: String
    event_date: String
    sequence: String
    genres: [String!]!
  
    type: String!
  }

  input TypeInput {
    name: String!
    description: String
  }
`;

module.exports = typeDefs;