const mongoose = require("mongoose");

const playlistModel = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  audioId: [{ type: mongoose.Types.ObjectId, ref: "Audio"}],
});

module.exports = mongoose.model("Playlist", playlistModel);
