const Session = require('../models/Sessions')

export async function getAllSessions(req, res){
    try {
        const sessions = await Session.find();
        return res.json({sessions}) // {top: topFilms, new: newFilms, all: allFilms}
    } catch (error) {
        console.log(error)
    }
}

export async function save(req, res){
    const {idFilm, date, hourStart, hourEnd, idLocation, numRoom} = req.body
    try{
        const merch = new Session({
            idFilm: idFilm,
            date: date,
            hourStart: hourStart,
            hourEnd: hourEnd,
            idLocation: idLocation,
            numRoom: numRoom,
            seats: 120
        });

        await merch.save();
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function update(req, res){
    const {id, idFilm, date, hourStart, hourEnd, idLocation, numRoom} = req.body
    try{
        await Session.updateOne(
            {"_id": id},
            {$set: {
                idFilm: idFilm,
                date: date,
                hourStart: hourStart,
                hourEnd: hourEnd,
                idLocation: idLocation,
                numRoom: numRoom
            }}
        );
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function remove(req, res){
    const {id} = req.body
    try{
        await Session.deleteOne({"_id": id});
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}