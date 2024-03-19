const mongoose = require('mongoose')
const Schema = mongoose.Schema
const packageSelectedSchema = new Schema(
    {
        packageId: String,
        userId: String,
        created_at: Date,
        ends_at: Date,
        freeTicketsCounter: Number,
        giftTaked: Boolean
    }
)

const packageSelected = mongoose.model("packageSelected", packageSelectedSchema)
module.exports = packageSelected