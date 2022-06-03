const mongoose = require ('mongoose')

const instrumentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['guitar', 'drums', 'mayonnaise', 'bass guitar']
    },
    brand : {
        type: String,
        required: true,
    },
    model: {
        type: String
    },
    price: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    }
})

module.exports = mongoose.model('Instrument', instrumentSchema)