const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  nombre:  String,
  descripcion: String
});

// Crear el modelo
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;