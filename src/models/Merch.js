const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const merchSchema = new Schema({
    nombre:  String,
    tipo: String,
    descripcion: String,
    precio: Number,
    stock: String,
    estado: String,
    fecha_drop: Date
});

// Crear el modelo
const Merch = mongoose.model('Merch', merchSchema);

module.exports = Merch;