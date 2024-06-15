const Ticket = require('../models/ticket')

export async function getAllTickets(req, res){
    try {
        const tickets = await Ticket.find();
        return res.json({tickets})
    } catch (error) {
        console.log(error)
    }
}

export async function save(req, res){
    const {sessionId, filmId, filmName, mallId, mallName, numRoom, date, hourStart, hourEnd, priceTotal, seats} = req.body
    try{
        const ticket = new Ticket({
            sessionId: sessionId,
            filmId: filmId,
            filmName: filmName,
            mallId: mallId,
            mallName: mallName,
            numRoom: numRoom,
            date: date,
            hourStart: hourStart,
            hourEnd: hourEnd,
            priceTotal: priceTotal,
            qrCode: "/qr/lookitQR.png",
            seats: seats
        });

        await ticket.save();
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}