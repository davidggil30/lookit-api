const express = require("express")
const router = express.Router()
const aboutusController = require("../controllers/aboutus.controller")


router.get("/faqs", aboutusController.getAllFaqs)
router.get("/locations", aboutusController.getAllLocations)


export default router