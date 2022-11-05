
const express = require('express')
const router = express.Router()

const {verifyUser} = require('../controller/loginController')

router.route('/verify').get(verifyUser)

module.exports = router
