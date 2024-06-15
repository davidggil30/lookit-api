const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema = new Schema({
  description: String,
  duration: Number,
  image: String,
  name: String,
  actors: String,
  directors: String,
  release_date: Date,
  category: String,
  pegi: String,
  final_date: Date
});

// Crear el modelo
const Film = mongoose.model('Film', filmSchema);

module.exports = Film;