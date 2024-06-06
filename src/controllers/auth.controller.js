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
                password: hash_password,
                img: "/img/icon/defaultProfile.png",
                preferences: "undefined",
                cp: "No definido"
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

export async function update(req, res){
    const {id, name, surname, preferences, cp} = req.body
    try{
        const user = await User.updateOne(
            {"_id": id},
            {$set: {"name": name, "surname": surname, "preferences": preferences, "cp": cp}}
        );
        return res.status(200).json({success: "Todo bien"})
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}

export async function getUserByUsername(req, res){
    const {username} = req.body
    try{
        const user = await User.findOne({"username": username});
        console.log(!user)
        if (user)
            return res.status(200).json({user:user})
        return res.status(200).json({user: null})
    }catch(error){
        return res.status(500).json({error: "Error de base de datos"})
    }
}

export async function getUserByEmail(req, res){
    const {email} = req.body
    try{
        const user = await User.findOne({"email": email});
        console.log(!user)
        if (user)
            return res.status(200).json({user:user})
        return res.status(200).json({user: null})
    }catch(error){
        return res.status(500).json({error: "Error de base de datos"})
    }
}