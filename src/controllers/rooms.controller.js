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

export async function update(req, res){
    const {id, name, capacity, img, price, pricePersonExtra, screen, sound, location} = req.body
    try{
        await Room.updateOne(
            {"_id": id},
            {$set: {"name": name, "capacity": capacity, "img": img, "price": price, "pricePersonExtra": pricePersonExtra, "screen": screen, "sound": sound, "location": location}}
        );
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function save(req, res){
    const {name, capacity, img, price, pricePersonExtra, screen, sound, location} = req.body
    try{
        const room = new Room({
            name: name,
            capacity: capacity,
            img: img,
            price: price,
            pricePersonExtra: pricePersonExtra,
            screen: screen,
            sound: sound,
            location: location
        });

        await room.save();
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function Delete(req, res){
    const {id} = req.body
    try{
        await Room.deleteOne({"_id": id});
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}