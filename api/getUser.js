const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Get user object
// @route GET /api/getUser
// @access Private
router.route('/').get((asyncHandler( async (request, response) => {
    const user = await User.find()
    response.status(200).json({User: user})
})))

module.exports = router