const express = require("express")
const router = express.Router()
const packageController = require("../controllers/package.controller")


router.get("/", packageController.getAllPackage)
router.post("/detail", packageController.getPackageById)
router.post("/set", packageController.setPackage)
router.post("/userPackage", packageController.getPackageByUserId)

export default router