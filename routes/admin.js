const express = require('express')
const router = express.Router()

const memberControl = require('../controllers/admin') 
//const upload = require('../middleware/upload')
//const authenticate = require('../middleware/authenticate')

router.get('/show', memberControl.show)
router.post('/add',   memberControl.add)
// router.post('/update', memberControl.update)
router.post('/destroy', memberControl.destroy)

module.exports = router