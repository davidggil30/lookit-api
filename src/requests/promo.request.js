export async function newMerch(req, res, next){
    const { body } = req
    const requiredFields = ["nombre", "tipo", "descripcion", "precio", "cantidad_stock", "estado", "fecha_lanzamiento", "restricciones", "img"]
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }

    next()
}

export async function updateMerch(req, res, next){
    const { body } = req
    const requiredFields = ["id", "nombre", "tipo", "descripcion", "precio", "cantidad_stock", "estado", "restricciones", "img"]
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }

    next()
}

export async function deleteMerch(req, res, next){
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