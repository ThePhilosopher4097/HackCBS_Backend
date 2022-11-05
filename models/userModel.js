
const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'Please enter your full name']
        },
        email:{
            type: String,
            require: [true, 'Please enter your email ID']
        },
        phone:{
            type: String,
            require: [true, 'Please enter your Mobile number']
        },
        usertype:{
            type: String,
            require: [true, 'Please select user-type']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)