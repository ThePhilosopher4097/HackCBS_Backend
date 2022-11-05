const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Login the user
// @route GET /api/login/verify
// @access Private
const verifyUser = asyncHandler( async (request, response) => {
    response.status(200).json({message:'Success : User Logged in !'})
})

module.exports = {
    verifyUser
}