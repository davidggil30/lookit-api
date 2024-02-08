const express = require("express")
const router = express.Router()
const filmController = require("../controllers/films.controller")


router.get("/", filmController.getAllFims)
router.get("/detail", filmController.getFilmById)

export default router