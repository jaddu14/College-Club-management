const express = require('express')
const router = express.Router()
const expenseControl = require('../controllers/expense')

router.post('/credit', expenseControl.credit )
module.exports = router