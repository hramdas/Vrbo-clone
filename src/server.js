const express = require('express')
const connect = require('./configs/db')
const app = express()
app.use(express.json())

app.set("view engine" , "ejs")
app.use(express.static("public"))

const Spaces = require('./models/spaces')

app.get('/', (req, res)=>{
   return res.render('index.ejs', {})
})

app.get('/list', (req, res)=>{
   return res.render('list.ejs', {})
})

app.get('/single/', async (req, res)=>{
   //  const space = await Spaces.find()
   return res.render('single.ejs', {})
})

const spacesController = require('./controllers/spaces')
app.use('/spaces', spacesController)

app.listen('2000', async ()=>{
    await connect()
    console.log('Listening on port 2000')
})