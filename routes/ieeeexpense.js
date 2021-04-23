const express = require('express')
const router = express.Router()
const expenseControl = require('../controllers/ieeeexpense')

router.post('/credit', expenseControl.credit )
router.get('/show', expenseControl.show )
router.post('/destroy', expenseControl.destroy )

module.exports = router