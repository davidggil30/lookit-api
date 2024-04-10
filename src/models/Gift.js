const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftSchema = new Schema({
    nombre:  String,
    tipo: String,
    descripcion: String,
    condiciones: String,
    fecha_ini: Date,
    fecha_fin: Date,
    stock: Number,
    estado: String,
    restricciones: String
});

// Crear el modelo
const Gift = mongoose.model('Gift', giftSchema);

module.exports = Gift;