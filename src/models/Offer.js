const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    nombre:  String,
    tipo: String,
    descripcion: String,
    descuento: Number,
    condiciones: String,
    fecha_ini: Date,
    fecha_fin: Date,
    estado: String,
    restricciones: String
});

// Crear el modelo
const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;