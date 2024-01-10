const mongoose = require('mongoose');
const BookedRoom = require('../models/BookedRoom');

export async function bookedRoom(req, res) {
    const validEmail = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    const validName = /^[a-zA-Z]+$/; // Expresión regular para validar que el nombre solo contiene letras
    const validSurname = /^[a-zA-Z\s]+$/; // Expresión regular para validar que los apellidos solo contienen letras y espacios
    const validTel = /^\d{9}$/; // Expresión regular para validar que el teléfono tiene exactamente 9 dígitos

    const { name, surname, business, email, tel, extra, comments, terms } = req.body;

    const errors = [];

    if (name === '') {
        errors.push('El campo "nombre" es obligatorio');
    } else if (!validName.test(name)) {
        errors.push('El campo "nombre" solo puede contener letras');
    }

    if (surname === '') {
        errors.push('El campo "Apellidos" es obligatorio');
    } else if (!validSurname.test(surname)) {
        errors.push('El campo "Apellidos" solo puede contener letras y espacios');
    }

    if (!(business === 'empresa' || business === 'particular')) {
        errors.push('El campo "Negocio" debe ser seleccionado como "empresa" o "particular"');
    }

    if (!validEmail.test(email)) {
        errors.push('El campo "Email" no tiene la estructura correcta');
    }

    if (tel === '' || !validTel.test(tel)) {
        errors.push('El campo "Teléfono" debe tener 9 dígitos');
    }

    if (!terms) {
        errors.push('Debe aceptar los términos y condiciones');
    }

    if (errors.length > 0) {
        return res.json({ errors });
    }

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
