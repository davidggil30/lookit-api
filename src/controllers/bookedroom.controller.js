const mongoose = require('mongoose');
const BookedRoom = require('../models/BookedRoom');

export async function bookedRoom(req, res) {

    const { name, surname, business, email, tel, extra, comments, terms } = req.body;

    try {
        const newBooking = new BookedRoom({
            name: name,
            surname: surname,
            business: business,
            email: email, 
            tel: tel,
            extraPerson: extra,
            comments: comments
        });

        await newBooking.save();

        return res.status(200).json({ success: 'Formulario enviado correctamente' });
    } catch (error) {
        console.error('Error al guardar en la base de datos:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}
