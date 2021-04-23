const mongoose = require('mongoose')
const { StringDecoder } = require('string_decoder')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    Name: {
        type: String
    },
    Sic:{
        type:Number
    },
    Branch:{
        type:String
    },
    Contact:{
        type: String
    },
    Email:{
        type: String
    }
},{timestamps: true})

const cricketmember = mongoose.model('cricketmember',memberSchema)
module.exports = cricketmember

