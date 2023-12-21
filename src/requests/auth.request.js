export function login(req, res, next){
    const { body } = req
    const requiredFields = ['user', 'password']
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})

    next()
}