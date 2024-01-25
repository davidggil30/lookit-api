const User = require("../models/User")

export async function getUserByEmail(email){
    try{
        return User.find({"email":email})
    }catch(error){
        console.log(error)
    }
    return null
}

export async function login(req, res){
    const {name, surname, username, email, password} = req.body
    try{
        const newUser = new User(
            {
                name: name,
                surname: surname,
                username: username,
                email: email,
                password: password
            }
        );
        await newUser.save()
        return res.json({succes: "Usuario registrado correctamente", user: newUser})
    }catch(error){
        return res.status(500).json({error: "Error al guardar en la base de datos"})
    }
}