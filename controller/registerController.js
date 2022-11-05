const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register the user
// @route POST /api/register
// @access Private
const registerUser = asyncHandler( async (request, response) => {

    const name = request.body.name
    const email = request.body.email
    const phone = request.body.phone
    const usertype = request.body.usertype

    if (!name || !email || !phone || !usertype) {
        response.status(400).json({message:'Please add data.'})    
        throw new Error('Please add the required data')
    }

    const user = await User.create({
        name: name,
        email: email,
        phone: phone,
        usertype: usertype
    })
    response.status(200).json({message:'Success : User Registered !', User:user})
})

module.exports = {
    registerUser
}