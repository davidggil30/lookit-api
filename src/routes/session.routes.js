const express = require("express")
const router = express.Router()
const controller = require("../controllers/session.controller")
const request = require("../requests/session.request")


router.get("/", controller.getAllSessions)
router.post("/new", request.save, controller.save)
router.post("/update", request.update, controller.update)

export default router