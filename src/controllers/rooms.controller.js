const Room = require('../models/Room')

export async function getAllRooms(req, res){
    try {
        const rooms = await Room.find();
        return res.json(rooms) // {top: topFilms, new: newFilms, all: allFilms}
    } catch (error) {
        console.log(error)
    }
}

export async function getRoomById(req, res){
    try {
        console.log(req.query.room)
        const rooms = await Room.findById(req.query.room);
        return res.json(rooms)
    } catch (error) {
        console.log(error)
    }
}