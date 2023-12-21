const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const authRequest = require("../requests/auth.request")

router.post("/login", authRequest.login, authController.login)

export default router