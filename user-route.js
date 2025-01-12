const userController = require('../controllers/user-controller')
const express = require('express')

const router = express.Router()
const userAuth = require('../middlewares/user-auth')
router.get('/',userController.getUser)
router.get('/:id',userController.getUseByIndex)

module.exports = router