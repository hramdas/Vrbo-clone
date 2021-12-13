const express = require('express')
const connect = require('./configs/db')
const app = express()

app.listen('2000', async ()=>{
    await connect()
    console.log('Listening on port 2000')
})