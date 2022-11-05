const { request, response } = require("express");

const getUserData = (request, response) => {
    response.status(200).json({message:'get user data'})
}

module.exports = {
    getUserData,
}