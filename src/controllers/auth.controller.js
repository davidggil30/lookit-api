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
    const {email, password} = req.body
    const user = await getUserByEmail(email)
    if (user) {
        return res.json(user)
            //return res.json({success: "Us"})
    }
    return res.status(500).json({error: "Usuario y contraseña no coinciden"})
}   

export async function signup(req, res){

}