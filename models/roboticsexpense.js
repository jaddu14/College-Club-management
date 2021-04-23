const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
    Name: {
        type: String
    },
    Amount:{
        type:Number
    },
    Type:{
        type:String
    },
    Date:{
        type: String
    }
},{timestamps: true})

const roboticsexpense = mongoose.model('roboticsexpense',expenseSchema)
module.exports = roboticsexpense
