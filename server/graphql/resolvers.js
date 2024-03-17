const Audio = require("../models/Audio");

const resolvers = {
  Query: {
    audios: async () => {
      try {
        const audios = await Audio.find();
        return audios.map((audio) => ({
          ...audio._doc,
          _id: audio._id.toString(),
        }));
      } catch (error) {
        console.log("Error fetching audios:", error);
        throw new Error("Failed to fetch audios");
      }
    },
  },
  Mutation: {
    createAudio: async (_, { audioInput }) => {
      const {
        title,
        date_production,
        productors,
        nbr_invoice,
        nbr_contract,
        type_support,
        nbr_support,
        tech_comments,
        quality,
        language,
        frequency,
        synopsis,
        format,
        version,
        event_location,
        event_date,
        sequence,
        genres,
        type
      } = audioInput;

      const audio = new Audio({
        title,
        date_production,
        productors,
        nbr_invoice,
        nbr_contract,
        type_support,
        nbr_support,
        tech_comments,
        quality,
        language,
        frequency,
        synopsis,
        format,
        version,
        event_location,
        event_date,
        sequence,
        genres,
        type
      });

      try {
        const result = await audio.save();
        return {
          ...result._doc,
          _id: result._id.toString(),
        };
      } catch (error) {
        console.log("Error saving audio:", error);
        throw new Error("Failed to save audio");
      }
    }
  }
};

module.exports = resolvers;