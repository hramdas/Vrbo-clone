const express = require('express')
const connect = require('./configs/db')
const app = express()
app.use(express.json())
app.set("view engine" , "ejs")

app.get('/', (req, res)=>{
   return res.render('index.ejs', {})
})

app.listen('2000', async ()=>{
    await connect()
    console.log('Listening on port 2000')
})