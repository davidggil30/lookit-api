export function update(req, res, next){
    const { body } = req
    const requiredFields = ["id", "name", "capacity", "img", "price", "pricePersonExtra", "screen", "sound", "location"]
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }

    next()
}

export function save(req, res, next){
    const { body } = req
    const requiredFields = ["name", "capacity", "img", "price", "pricePersonExtra", "screen", "sound", "location"]
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }

    next()
}

export function Delete(req, res, next){
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