const Ticket = require('../models/ticket')
const Session = require('../models/Sessions')

export async function getAllTickets(req, res){
    try {
        const tickets = await Ticket.find();
        return res.json({tickets})
    } catch (error) {
        console.log(error)
    }
}

export async function save(req, res){
    const {sessionId, filmId, filmName, mallId, mallName, numRoom, date, hourStart, hourEnd, priceTotal, seats, userId, email} = req.body
    try{
        const ticket = new Ticket({
            sessionId: sessionId,
            userId: userId,
            email: email,
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

        const session = await Session.findOne({"_id": sessionId})
        const numSeats = session.seats
        const totalSeats = (numSeats - (seats.split(";").length - 1))
        await Session.updateOne(
            {"_id": sessionId},
            {$set: {seats: totalSeats}}
        );

        await ticket.save();
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}