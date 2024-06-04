const express = require("express")
const router = express.Router()
const aboutusController = require("../controllers/aboutus.controller")
const aboutusRequest = require("../requests/aboutus.request")


router.get("/faqs", aboutusController.getAllFaqs)
router.get("/locations", aboutusController.getAllLocations)
router.post("/locations/update", aboutusRequest.updateLocations, aboutusController.updateLocations)


export default router