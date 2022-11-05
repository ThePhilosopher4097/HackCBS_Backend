
const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.status(200).json({message:'Register api test'})
})
router.post('/', (request, response) => {
    response.status(200).json({message:'Register api test'})
})

module.exports = router
