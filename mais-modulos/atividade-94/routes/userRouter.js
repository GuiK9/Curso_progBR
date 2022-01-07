const express = require('express') 
const router = express.Router()
const userController = require('../controllers/userController.js')

//por ser dados sensíveis ao usuário tudo será feito com o post

router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router