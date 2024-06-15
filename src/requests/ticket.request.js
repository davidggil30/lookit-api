export function save(req, res, next){
    const { body } = req
    const requiredFields = ["sessionId", "filmId", "filmName", "mallId", "mallName", "numRoom", "date", "hourStart", "hourEnd", "priceTotal", "seats", "userId", "email"]
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }
    next()
}