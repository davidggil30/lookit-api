const mongoose = require('mongoose')
const Schema = mongoose.Schema
const packageSchema = new Schema(
    {
        name: String,
        pricePerMonth: Number,
        pricePerYear: Number,
        freeTickets: Number,
        percentDiscount: Number,
        gift: Boolean,
        popcorn: Boolean
    }
)

const Package = mongoose.model("Package", packageSchema)
module.exports = Package