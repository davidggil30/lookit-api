const express = require("express")
const router = express.Router()
const promoController = require("../controllers/promo.controller")


router.get("/offers", promoController.getAllOffers)
router.get("/offers/detail", promoController.getOfferById)
router.get("/gifts", promoController.getAllGifts)
router.get("/gifts/detail", promoController.getGiftById)
router.get("/merch", promoController.getAllMerch)
router.get("/merch/detail", promoController.getMerchById)

export default router