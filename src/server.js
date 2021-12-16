const express = require('express')
const connect = require('./configs/db')
const app = express()
app.use(express.json())
app.set("view engine" , "ejs")
app.use(express.static("public"))

const Spaces = require('../models/spaces')

app.get('/', (req, res)=>{
   return res.render('index.ejs', {})
})

app.get('/list', (req, res)=>{
   return res.render('list.ejs', {})
})

app.get('/single/:id', async (req, res)=>{
    const space = await Spaces.findById(req.params.id)
   return res.render('single.ejs', {space})
})

app.listen('2000', async ()=>{
    await connect()
    console.log('Listening on port 2000')
})