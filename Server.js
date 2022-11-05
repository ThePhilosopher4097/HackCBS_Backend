
// Modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const erroHandler = require('./middleware/errorMiddleware')

const app = express()

/*app.get('/', (req,res) => {
    console.log('Hello !')
    res.status(200).json({message:'Okay!'})
})*/

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/register', require('./api/register'))
app.use('/api/login', require('./api/login'))
//app.use('./api/userdocs', require('./api/getUserDocuments'))

app.listen(port, () => console.log(`Server started on Port ${port}`))
console.log('Xggpians Doc-Share')