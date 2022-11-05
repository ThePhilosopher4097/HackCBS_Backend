
const express = require('express')
const router = express.Router()

// const {
//     getRegister,
//     setRegister
// } = require('../controllers/registerController')

router.get('/', getRegister)
router.post('/', setRegister)

module.exports = router
