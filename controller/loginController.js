const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Login the user
// @route GET /api/login/validate
// @access Private
const validateUser = asyncHandler( async (request, response) => {
    const user = await User.find()
    response.status(200).json({User: user})

})
// @desc Login the user
// @route GET /api/login/verify
// @access Private
const verifyUser = asyncHandler( async (request, response) => {
    response.status(200).json({message:'Success : User Logged in !'})
})

module.exports = {
    validateUser,
    verifyUser
}