const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const authRequest = require("../requests/auth.request")

router.post("/signup", authRequest.signup, authController.signup)
router.post("/signin", authRequest.signin, authController.signin)
router.post("/update", authRequest.update, authController.update)

export default router