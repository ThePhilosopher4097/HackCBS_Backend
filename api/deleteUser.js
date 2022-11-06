const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc delete the user object
// @route DELETE /api/user
// @access Private
router.route('/').delete((asyncHandler( async (request, response) => {
    const user = await User.deleteOne({"email":request.body.email}) 
    response.status(200).json({User: user})
})))

module.exports = router