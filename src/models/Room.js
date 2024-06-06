const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name:  String,
  capacity: Number,
  img: String,
  price: Number,
  pricePersonExtra: Number,
  screen: String,
  sound: String,
  location: String
});

// Crear el modelo
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;