const User = require("../models/User")

export async function login(req, res, next){
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