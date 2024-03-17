const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    audios: [Audio!]!
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
    sequence: String
    
    
    # based on this
    type: [String!]!
        
    # News
    commentator: String
    event_location: String
    event_date: String

    # Emission
    presenter: [String] 
    preparation: [String] 
  
    # Causerie
    speaker: String 
    causerie_reciter: String 
    causerie_location: String

    # quran
    quran_reciter: String 
    recite_type: String 

    # music 
    singer: [String] 
    interpreter: String
    composer: String
    music_writer: String 
    musical_genre: String 
    lyrics: String 
    orchestra: String
    distribution: String 
    # addon_file: 

    # fiction
    author: [String] 
    actor: [String] 
    fiction_writer: String 
    adaptation: String
    
  }

  type Mutation {
    createAudio(audioInput: AudioInput!): Audio!
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
    sequence: String
    genres: [String!]!
    
    type: [String!]!
  
    commentator: String
    event_location: String
    event_date: String
    presenter: [String]
    preparation: [String]
    speaker: String
    reciter: String
    causerie_location: String
    recite_type: String
    singer: [String]
    interpreter: String
    composer: String
    writer: String
    musical_genre: String
    lyrics: String
    orchestra: String
    distribution: String
    author: [String]
    actor: [String]
    adaptation: String
  }

`;

module.exports = typeDefs;