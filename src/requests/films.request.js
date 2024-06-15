export function save(req, res, next){
    const { body } = req
    const requiredFields = ["description", "duration", "image", "name", "actors", "directors", "release_date", "category", "pegi", "final_date"]
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
    const requiredFields = ["id", "description", "duration", "image", "name", "actors", "directors", "release_date", "category", "pegi", "final_date"]
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }
    next()
}

export function deleteFilm(req, res, next){
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