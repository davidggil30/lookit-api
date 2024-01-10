const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookedRoomSchema = new Schema({
  name:  String,
  surname: String,
  business: String,
  email: String, 
  tel: String,
  extraPerson: String,
  comments: String
});

// Crear el modelo
const bookedRoom = mongoose.model('BookedRoom', bookedRoomSchema);

module.exports = bookedRoom;