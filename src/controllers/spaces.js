const exprss = require('express')
const { model } = require('mongoose')
const router = exprss.Router()
const Spaces = require('../models/spaces')

router.get('', async (req, res)=>{
    const spaces = await Spaces.find().lean().exec()
    res.status(200).send(spaces)
})
// router.get('/single', async (req, res)=>{
//     const spaces = await Spaces.find().lean().exec()
//     res.status(200).send(spaces)
// })

router.post('', async (req, res)=>{
    const space = await Spaces.create(req.body)
    res.status(201).send(space)
})

model.exports = router
