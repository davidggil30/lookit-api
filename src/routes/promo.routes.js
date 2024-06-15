const express = require("express")
const router = express.Router()
const promoController = require("../controllers/promo.controller")
const promoRequest = require("../requests/promo.request")


router.get("/offers", promoController.getAllOffers)
router.get("/offers/detail", promoController.getOfferById)
router.get("/gifts", promoController.getAllGifts)
router.get("/gifts/detail", promoController.getGiftById)
router.get("/merch", promoController.getAllMerch)
router.get("/merch/detail", promoController.getMerchById)
router.post("/merch/update", promoRequest.updateMerch, promoController.updateMerch)
router.post("/merch/new", promoRequest.newMerch, promoController.newMerch)
router.post("/merch/delete", promoRequest.deleteMerch, promoController.deleteMerch)

export default router