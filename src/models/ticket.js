const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  sessionId: String,
  userId: String,
  email: String,
  filmId: String,
  filmName: String,
  mallId: String,
  mallName: String,
  numRoom: Number,
  date: Date,
  hourStart: String,
  hourEnd: String,
  priceTotal: Number,
  qrCode: String,
  seats: String
});

// Crear el modelo
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;