const express = require("express")
const router = express.Router()
const bookedRoomController = require("../controllers/bookedroom.controller")
const bookedRoomRequest = require("../requests/bookedroom.request")

router.post("/", bookedRoomRequest.bookedRoom, bookedRoomController.bookedRoom)

export default router