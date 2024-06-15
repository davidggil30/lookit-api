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

export async function newMerch(req, res){
    const {nombre, tipo, descripcion, precio, cantidad_stock, estado, fecha_lanzamiento, restricciones, img} = req.body
    try{
        const merch = new Merch({
            nombre: nombre,
            tipo: tipo,
            descripcion: descripcion,
            precio: precio,
            cantidad_stock: cantidad_stock,
            estado: estado,
            fecha_lazamiento: fecha_lanzamiento,
            restricciones: restricciones,
            img: img
        });

        await merch.save();
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function updateMerch(req, res){
    const {id, nombre, tipo, descripcion, precio, cantidad_stock, estado, restricciones, img} = req.body
    try{
        await Merch.updateOne(
            {"_id": id},
            {$set: {
                nombre: nombre,
                tipo: tipo,
                descripcion: descripcion,
                precio: precio,
                cantidad_stock: cantidad_stock,
                estado: estado,
                restricciones: restricciones,
                img: img
            }}
        );
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function deleteMerch(req, res){
    const {id} = req.body
    try{
        await Merch.deleteOne({"_id": id});
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}