const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongose = require("./libs/connect")

import authRoutes from "./routes/auth.routes"

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.get('/api/v1', (req, res) => {
    res.json({ ping: 'pong' })
})

app.use("/api/v1/auth", authRoutes)

const port = process.env.NODE_PORT || 8000

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto: ${port}`)
})