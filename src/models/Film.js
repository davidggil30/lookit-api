const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema = new Schema({
  nombre:  String,
  descripcion: String
});

// Crear el modelo
const Film = mongoose.model('Film', filmSchema);

module.exports = Film;