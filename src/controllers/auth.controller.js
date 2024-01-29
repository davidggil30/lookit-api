const User = require("../models/User")
import bcrypt from 'bcryptjs'

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
        const hash_password = await bcrypt.hash(password, 12)
        const newUser = new User(   
            {
                name: name,
                surname: surname,
                username: username,
                email: email,
                password: hash_password
            }
        );
        await newUser.save()
        return res.json({success: "Usuario registrado correctamente"})
    }catch(error){
        return res.status(500).json({error: "Error al guardar en la base de datos"})
    }
}