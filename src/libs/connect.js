const mongoose = require('mongoose')

const dbname = "lookit"
const uri = "mongodb://localhost:27017"

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Conectado a mongodb"))
    .catch(e => console.log("Error de conexión", e))
