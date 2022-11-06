const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Login the user
// @route POST /api/login/verify
// @access Private
const verifyUser = asyncHandler( async (request, response) => {

    const obj = User.findOne({"email":request.body.email})
    User.find({email:request.body.email},(error, docs) => {
        if(docs.length>0){
            if (obj.password === request.body.password) {
                return response.status(200).json({status:true, message:'Success : User Logged in !'})
            }
        }
    }).catch();
})

module.exports = {
    verifyUser
}