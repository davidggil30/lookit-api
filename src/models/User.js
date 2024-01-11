const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema(
    {
        name: String,
        surname: String,
        username: String,
        email: String,
        password: String,
        cp: String,
        preferences: String
    }
)

const user = mongoose.model("user", userSchema)
module.exports = user