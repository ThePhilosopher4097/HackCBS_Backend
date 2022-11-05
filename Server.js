
// Modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const erroHandler = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/database')

connectDB()

const app = express()

/*app.get('/', (req,res) => {
    console.log('Hello !')
    res.status(200).json({message:'Okay!'})
})*/

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/user', require('./api/register'))
app.use('/api/user/login', require('./api/login'))
app.use('/api/users', require('./api/getAllUsers'))
app.use('/api/user', require('./api/getUser'))
app.use('/api/user', require('./api/deleteUser'))
//app.use('./api/userdocs', require('./api/getUserDocuments'))

app.listen(port, () => console.log(`Server started on Port ${port}`))
console.log('Xggpians Doc-Share')