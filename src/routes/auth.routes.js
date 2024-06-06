const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const authRequest = require("../requests/auth.request")

router.post("/signup", authRequest.signup, authController.signup)
router.post("/signin", authRequest.signin, authController.signin)
router.post("/update", authRequest.update, authController.update)
router.post("/getUserByUsername", authRequest.getUserByUsername, authController.getUserByUsername)
router.post("/getUserByEmail", authRequest.getUserByEmail, authController.getUserByEmail)

export default router