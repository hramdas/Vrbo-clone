const exprss = require('express')
const { model } = require('mongoose')
const router = exprss.Router()
const Spaces = require('../models/spaces')

router.get('', async (req, res)=>{
    const spaces = await Spaces.find().lean().exec()
    res.status(200).send(spaces)
})

model.exports = router
