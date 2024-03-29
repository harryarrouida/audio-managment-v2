const Audio = require("../models/Audio");
const User = require("../models/User");
const Playlist = require("../models/Playlist")

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
    audio: async (_, args) => {
      const { _id } = args;
      try {
        const audio = await Audio.findById(_id);
        if (!audio) {
          throw new Error("audio is not found");
        }
        return {
          ...audio._doc,
          _id: audio._id.toString(),
        };
      } catch (error) {
        console.log("Error fetching the audio: ", error);
      }
    },
    audioByTitle: async (_, args) => {
      const { title } = args;
      try {
        const audios = await Audio.find({
          title: { $regex: title, $options: "i" },
        });
        if (!audios) {
          console.log("audio not found");
          throw new Error("audio not found");
        }
        return audios.map((audio) => ({
          ...audio._doc,
          _id: audio._id.toString(),
        }));
      } catch (error) {
        console.log("error fetching the audio by name:", error);
      }
    },
    feedAudios: async (_, { offset, limit }) => {
      try {
        const audios = await Audio.find().skip(offset).limit(limit);
        return audios.map((audio) => ({
          ...audio._doc,
          _id: audio._id.toString(),
        }));
      } catch (error) {
        console.log("error paginate the audios");
      }
    },
    users: async () => {
      try {
        const users = await User.find();
        return users.map((user) => ({
          ...user._doc,
          _id: user._id.toString(),
        }));
      } catch (error) {
        console.log("error fetching users");
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
        type,
        commentator,
        event_location,
        event_date,
        sequence,
        presenter,
        preparation,
        format,
        version,
        speaker,
        causerie_reciter,
        causerie_location,
        quran_reciter,
        recite_type,
        singer,
        interpreter,
        composer,
        music_writer,
        musical_genre,
        lyrics,
        orchestra,
        distribution,
        author,
        actor,
        fiction_writer,
        adaptation,
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
        type,
        commentator,
        event_location,
        event_date,
        sequence,
        presenter,
        preparation,
        format,
        version,
        speaker,
        causerie_reciter,
        causerie_location,
        quran_reciter,
        recite_type,
        singer,
        interpreter,
        composer,
        music_writer,
        musical_genre,
        lyrics,
        orchestra,
        distribution,
        author,
        actor,
        fiction_writer,
        adaptation,
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
    },
    deleteAudio: async (_, { _id }) => {
      try {
        const result = await Audio.findByIdAndDelete(_id);
        return {
          ...result._doc,
          _id: result._id.toString(),
        };
      } catch (error) {
        console.log("failed to delete the audio");
      }
    },
    createPlaylist: async (_, {name, description, userId}) => {
      try {
        const result = await Playlist.create({
          name, description, userId
        });
        return {
          ...result._doc,
          _id: result._id.toString(),
        };
      } catch (error) {
        console.log("Error saving playlist:", error);
        throw new Error("Failed to save playlist");
      }
    },
  },
};

module.exports = resolvers;
