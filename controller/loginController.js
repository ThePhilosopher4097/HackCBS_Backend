const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')

// @desc Login the user
// @route GET /api/login/validate
// @access Private
const validateUser = asyncHandler( async (request, response) => {
    response.status(200).json({message:'Success : User Exists !'})
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