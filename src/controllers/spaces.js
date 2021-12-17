const express = require('express')
const Spaces = require('../models/spaces')
const router = express.Router()

router.get('', async (req, res)=>{
    const spaces = await Spaces.find().lean().exec()
    return res.status(200).send(spaces)
})

// router.get('/single', async (req, res)=>{
//     const spaces = await Spaces.find().lean().exec()
//     res.status(200).send(spaces)
// })

router.post('', async (req, res)=>{
    const space = await Spaces.create(req.body)
    res.status(201).send(space)
})

module.exports = router
