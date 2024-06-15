export function save(req, res, next){
    const { body } = req
    const requiredFields = ["idFilm", "date", "hourStart", "hourEnd", "idLocation", "numRoom"]
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }
    next()
}

export function update(req, res, next){
    const { body } = req
    const requiredFields = ["id", "idFilm", "date", "hourStart", "hourEnd", "idLocation", "numRoom"]
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }
    next()
}

export function remove(req, res, next){
    const { body } = req
    const requiredFields = ["id"]
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }
    next()
}