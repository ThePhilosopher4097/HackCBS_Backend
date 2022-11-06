const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://xgppians:xgppians@xgppians.hse6du6.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async() => {
    try{
        const connection = await mongoose.connect(MONGO_URI)
        console.log(`Mongo DB Connected : ${connection.connection.host}`.cyan.underline)
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

const db = mongoose.connection;

module.exports = {connectDB, db}