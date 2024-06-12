const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  idFilm: String,
  date: Date,
  hourStart: String,
  hourEnd: String,
  idLocation: String,
  numRoom: Number,
  seats: Number
});

// Crear el modelo
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;