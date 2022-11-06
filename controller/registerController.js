const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const {x,db} = require('../config/database')
// @desc Register the user
// @route POST /api/register
// @access Private
const registerUser = asyncHandler( async (request, response) => {

    const name = request.body.name
    const email = request.body.email
    const phone = request.body.phone
    const usertype = request.body.usertype
    const password = request.body.password

    if (!name || !email || !phone || !usertype || !password) {
        response.status(400).json({status:false, message:'Please add data.'})    
        throw new Error('Please add the required data')
    }

    User.find({email:email},(error, docs) => {
            if(docs.length>0){
                return response.json({message:'User with same Email ID Already exists.', status:false});
            }
        }).catch();


    const user = await User.create({
        name: name,
        email: email,
        phone: phone,
        usertype: usertype,
        password: password
    })
    response.status(200).json({status:true, message:'Success : User Registered !', User:user})
})

module.exports = {
    registerUser
}