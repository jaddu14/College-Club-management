const express = require('express')
const router = express.Router()

const memberControl = require('../controllers/member') 
const upload = require('../middleware/upload')
//const authenticate = require('../middleware/authenticate')

router.get('/',  memberControl.index)
router.post('/show', memberControl.show)
router.post('/store', upload.single('avatar'),   memberControl.store)
router.post('/update', memberControl.update)
router.post('/delete', memberControl.destroy)

module.exports = router