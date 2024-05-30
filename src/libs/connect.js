const mongoose = require('mongoose')

const dbname = "lookit"
const uri = "mongodb+srv://clgon:clgon@clustercarlos.wrsofji.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCarlos"

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Conectado a mongodb"))
    .catch(e => console.log("Error de conexión", e))
