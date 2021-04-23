const mongoose = require('mongoose')
const { StringDecoder } = require('string_decoder')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    Name: {
        type: String
    },
    Surname:{
        type:String
    },
    Email:{
        type: String
    },
    Password:{
        type: String
    },
    Sic:{
        type:String
    },
    Branch:{
        type:String
    },
    avatar:{
        type: String
    }
},{timestamps: true})

const member = mongoose.model('member',memberSchema)
module.exports = member

