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
        console.log("error fetching audios", error);
      }
    },
  },
  Mutation: {
    createAudio: async (_, args) => {
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
      } = args.audioInput;

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
        console.log("error saving audio", error);
      }
    }
  }
};

module.exports = resolvers;
