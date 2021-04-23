const { response } = require('express')
const expense = require('../models/expense')

const credit =(req,res,next) =>{
    let Expense = new expense({
        Name:req.body.Name,
        Amount:req.body.Amount,
        Type:req.body.Type,
        Date:req.body.Date
    })
    Expense.save()
    .then(response =>{
        res.json({
            message: 'Credited successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}
module.exports = {credit}