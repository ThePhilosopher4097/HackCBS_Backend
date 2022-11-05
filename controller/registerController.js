const express = require('express')
const router = express.Router()

// @desc Register the user
// @route POST /api/register
// @access Private
const registerUser = (request, response) => {
    response.status(200).json({message:'Success : User Registered !'})
}

module.exports = {
    registerUser
}