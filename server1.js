const express = require('express')
const app = express()
app.use(express.json())
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const personRoutes = require('./personRoutes');


 
app.use('/',personRoutes)
app.listen(3000,()=>{
 console.log("sever is connected");
})