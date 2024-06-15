export function updateLocations(req, res, next){
    const { body } = req
    const requiredFields = ['id', 'name', 'openHour', 'closeHour', 'phone', 'numSalas', 'priceTicket']
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }

    next()
}