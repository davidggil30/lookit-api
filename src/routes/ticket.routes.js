const express = require("express")
const router = express.Router()
const controller = require("../controllers/ticket.controller")


router.get("/", controller.getAllTickets)
router.post("/new", controller.save)

export default router