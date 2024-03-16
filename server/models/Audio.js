const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date_production: { type: String, required: true },
  productors: [String],
  nbr_invoice: { type: String, required: true },
  nbr_contract: { type: String, required: true },
  type_support: { type: String, required: true },
  nbr_support: { type: String, required: true },
  tech_comments: { type: String },
  quality: { type: String, required: true },
  language: { type: String, required: true },
  frequency: { type: String },
  format: { type: String },
  synopsis: { type: String },
  version: { type: String },
  event_location: { type: String },
  event_date: { type: String },
  sequence: { type: String },
  genres: [String],
  type: {type: String, required: true}
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;
