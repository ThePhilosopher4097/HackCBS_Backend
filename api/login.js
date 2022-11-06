
const express = require('express')
const router = express.Router()

const {verifyUser} = require('../controller/loginController')

router.route('/verify').post(verifyUser)

module.exports = router
