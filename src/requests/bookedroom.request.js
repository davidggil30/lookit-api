export function bookedRoom(req, res, next){
    const { body } = req
    const requiredFields = ['name', 'surname', 'business', 'email', 'tel']
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
        return res.json({error: "Faltan campos obligatorios", emptyFields})

    next()
}