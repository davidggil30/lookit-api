const Faq = require('../models/Faq')
const Location = require('../models/Location')


export async function getAllFaqs(req, res){
    try {
        const faqs = await Faq.find();
        return res.json(faqs);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al obtener las Faqs' });
    }
}

export async function getFaqById(req, res){
    try {
        console.log(req.query.faq)
        const faqs = await Faq.findById(req.query.faq);
        return res.json(faqs)
    } catch (error) {
        console.log(error)
    }
}


export async function getAllLocations(req, res){
    try {
        const locations = await Location.find();
        return res.json(locations);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al obtener las ofertas' });
    }
}

export async function updateLocations(req, res){
    const {id, name, openHour, closeHour, phone, numSalas} = req.body
    console.log(numSalas)
    try{
        const result = await Location.updateOne(
            {"_id": id},
            {$set: {"mall": name, "openHour": openHour, "closeHour": closeHour, "phone": phone, "numSalas": numSalas}}
        );
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function getLocationById(req, res){
    try {
        console.log(req.query.location)
        const locations = await Location.findById(req.query.location);
        return res.json(locations)
    } catch (error) {
        console.log(error)
    }
}
