const express = require('express')
const router = express.Router()

// @desc Login the user
// @route POST /api/login
// @access Private
const validateUser = (request, response) => {
    response.status(200).json({message:'Success : User Exists !'})
}
const verifyUser = (request, response) => {
    response.status(200).json({message:'Success : User Logged in !'})
}

module.exports = {
    validateUser,
    verifyUser
}