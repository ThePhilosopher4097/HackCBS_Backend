const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')

// @desc Register the user
// @route POST /api/register
// @access Private
const registerUser = asyncHandler( async (request, response) => {
    if (!request.body.text) {
        return response.status(400).json({message:'Please add data.'})    
    }
    response.status(200).json({message:'Success : User Registered !'})
})

module.exports = {
    registerUser
}