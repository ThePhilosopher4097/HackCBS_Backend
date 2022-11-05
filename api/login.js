
const express = require('express')
const { get } = require('mongoose')
const router = express.Router()

const {
    validateUser,
    verifyUser
} = require('../controller/loginController')

router.route('/validate').get(validateUser)
router.route('/verify').get(verifyUser)

module.exports = router
