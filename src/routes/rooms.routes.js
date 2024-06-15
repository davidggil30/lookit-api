const express = require("express")
const router = express.Router()
const roomController = require("../controllers/rooms.controller")
const roomRequest = require("../requests/rooms.request")

router.get("/", roomController.getAllRooms)
router.get("/details", roomController.getRoomById)
router.post("/update", roomRequest.update, roomController.update)
router.post("/new", roomRequest.save, roomController.save)
router.post("/delete", roomRequest.Delete, roomController.Delete)

export default router