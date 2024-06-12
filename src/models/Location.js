const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    mall: String,
    location: String,
    openingHours: String,
    phone: String,
    openHour: String,
    closeHour: String,
    numSalas: Number,
    priceTicket: Number
});

// Crear el modelo
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;