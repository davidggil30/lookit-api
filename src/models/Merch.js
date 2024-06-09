const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const merchSchema = new Schema({
    nombre:  String,
    tipo: String,
    descripcion: String,
    precio: Number,
    cantidad_stock: Number,
    estado: String,
    fecha_lazamiento: Date,
    img: String
});

// Crear el modelo
const Merch = mongoose.model('Merch', merchSchema);

module.exports = Merch;