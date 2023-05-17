const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(cors())
app.use(express.json())

const url = process.env.MONGODB_URL
mongoose.connect(url)

const db = mongoose.connection
db.once('connected',()=>{
    console.log("database connected");
})
db.on('error',(err)=>{
    console.error(err)
})

const routes = require('./routes/routes')
app.use('/',routes);

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})