const mongoose = require('mongoose')
 
module.exports = new mongoose.Schema({
    name : {type: String, required: true},
    location : {type: String, required: true},
    type : {type: String, required: true},
    images : [{type: String, required: true}],
    body : {type: String, required: true},
    rate : {type: Number, required: true},
    rating : {type: Number, required: true},
    area : {type: Number, required: true},
    bedroom : {type: Number, required: true},
    spaces : [{type: String, required: true}],
    rules : [{type: String, required: true}],
})