const User = require("../models/User")

export async function getUserByEmail(req, res){
    const {email} = req.body
    try{
        let users = await User.findOne({"email": email})
        return res.status(200).json(users)
    }catch(error){
        console.log(error)
    }
    return null
}