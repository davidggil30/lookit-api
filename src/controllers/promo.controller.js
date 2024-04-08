const Offer = require('../models/Offer')
const Gift = require('../models/Gift')
const Merch = require('../models/Merch')

export async function getAllOffers(req, res){
    try {
        const offers = await Offer.find();
        return res.json(offers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al obtener las ofertas' });
    }
}


export async function getOfferById(req, res){
    try {
        console.log(req.query.offer)
        const offers = await Offer.findById(req.query.offer);
        return res.json(offers)
    } catch (error) {
        console.log(error)
    }
}

export async function getAllGifts(req, res){
    try {
        const gifts = await Gift.find();
        return res.json(gifts);
    } catch (error) {
        console.error(error);
    }
}

export async function getGiftById(req, res){
    try {
        const gift = await Gift.findById(req.query.gift);
        return res.json(gift);
    } catch (error) {
        console.error(error);
    }
}

export async function getAllMerch(req, res){
    try {
        const merch = await Merch.find();
        return res.json(merch);
    } catch (error) {
        console.error(error);
    }
}

export async function getMerchById(req, res){
    try {
        const merch = await Merch.findById(req.query.merch);
        return res.json(merch);
    } catch (error) {
        console.error(error);
    }
}