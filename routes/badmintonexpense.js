const express = require('express')
const router = express.Router()
const expenseControl = require('../controllers/badmintonexpense')

// router.get("/", (req, res) => {
//     res.send("");
//   });
router.post('/destroy', expenseControl.destroy )
router.post('/credit', expenseControl.credit )
router.get('/show', expenseControl.show)
module.exports = router