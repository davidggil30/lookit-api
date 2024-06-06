const User = require("../models/User")

export async function signup(req, res, next){
    const { body } = req
    const users = await User.find();
    for(let i = 0; i < users.length; i += 1)
    {
        if (users[i]["email"] == body.email)
            return res.json({emailError: "El correo ya esta siendo utilizado"})
        if (users[i]["username"] == body.username)
            return res.json({usernameError: "El nombre de usuario ya existe"})
    }
    next()
}

export function signin(req, res, next){
    const { body } = req
    const requiredFields = ['email', 'password']
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})

    next()
}

export function update(req, res, next){
    const { body } = req
    const requiredFields = ['id', 'name', 'surname', 'cp', 'preferences']
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
    {
        console.log(emptyFields)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})
    }

    next()
}

export function getUserByUsername(req, res, next){
    const { body } = req
    const requiredFields = ['username']
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})

    next()
}

export function getUserByEmail(req, res, next){
    const { body } = req
    const requiredFields = ['email']
    const emptyFields = requiredFields.filter((field) => !body[field])
    if (emptyFields.length > 0)
        return res.status(400).json({error: "Faltan campos obligatorios", emptyFields})

    next()
}