const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date_production: { type: String, required: true },
  productors: [String],
  nbr_invoice: { type: String, required: true },
  nbr_contract: { type: String, required: true },
  type_support: { type: String, required: true },
  nbr_support: { type: String, required: true },
  tech_comments: String,
  quality: { type: String, required: true },
  language: { type: String, required: true },
  frequency: String,
  synopsis: String,
  version: String,
  sequence: String,
  type: [{ type: String, required: true }],
  format: String,
  commentator: String,
  event_location: String,
  event_date: String,
  presenter: [String],
  preparation: [String],
  speaker: String,
  causerie_reciter: String,
  causerie_location: String,
  recite_type: String,
  singer: [String],
  interpreter: String,
  composer: String,
  music_writer: String,
  musical_genre: String,
  lyrics: String,
  orchestra: String,
  distribution: String,
  author: [String],
  actor: [String],
  fiction_writer: String,
  adaptation: String
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;
