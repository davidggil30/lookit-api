const express = require("express")
const router = express.Router()
const roomController = require("../controllers/rooms.controller")

router.get("/", roomController.getAllRooms)
router.get("/details", roomController.getRoomById)

export default router