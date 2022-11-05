
// Modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

//app.use('/api/register', require('./api/register'))
//app.use('./api/login', require('./api/login'))
//app.use('./api/userdocs', require('./api/getUserDocuments'))

app.listen(port, () => console.log(`Server started on Port ${port}`))
console.log('Xggpians Doc-Share')