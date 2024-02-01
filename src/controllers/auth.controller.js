const User = require("../models/User")
import bcrypt from 'bcryptjs'

export async function signup(req, res){
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

export async function signin(req, res){
    const {email, password} = req.body
    try{
        const user = await User.findOne({"email": email});
        if (user)
        {           
            const valid = await bcrypt.compare(password, user.password) 
            if(valid)
                return res.status(200).json(user)
        }
        return res.status(500).json({error: "Datos incorrectos"})
    }catch(error){
        return res.status(500).json({error: "Error de base de datos"})
    }
}