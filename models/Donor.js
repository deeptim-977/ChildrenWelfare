const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mongooseSchema = new Schema({
    fullname:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = Donor = mongoose.model('donor', mongooseSchema);