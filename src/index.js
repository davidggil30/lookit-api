const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongose = require("./libs/connect")

import authRoutes from "./routes/auth.routes"
import usersRoutes from "./routes/users.routes"
import filmsRoutes from "./routes/films.routes"
import packageRoutes from "./routes/package.routes"
import roomsRoutes from "./routes/rooms.routes"
import bookedRoomRoutes from "./routes/bookedroom.routes"
import promoRoutes from "./routes/promo.routes"
import aboutusRoutes from './routes/aboutus.routes'
import sessionsRoutes from './routes/session.routes'
import ticketRoutes from './routes/ticket.routes'

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send("Esta es mi API")
})

app.get('/api/v1', (req, res) => {
    res.json({ ping: 'pong' })
})

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", usersRoutes)
app.use("/api/v1/films", filmsRoutes)
app.use("/api/v1/package", packageRoutes)
app.use("/api/v1/rooms", roomsRoutes)
app.use("/api/v1/bookedroom", bookedRoomRoutes)
app.use('/api/v1/promo', promoRoutes)
app.use('/api/v1/aboutus', aboutusRoutes)
app.use('/api/v1/sessions', sessionsRoutes)
app.use('/api/v1/ticket', ticketRoutes)

const port = process.env.NODE_PORT || 8000

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto: ${port}`)
})