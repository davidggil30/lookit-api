const express = require("express")
const router = express.Router()
const filmController = require("../controllers/films.controller")
const filmRequest = require("../requests/films.request")


router.get("/", filmController.getAllFims)
router.get("/detail", filmController.getFilmById)
router.post("/new", filmRequest.save, filmController.save)
router.post("/update", filmRequest.update, filmController.update)

export default router