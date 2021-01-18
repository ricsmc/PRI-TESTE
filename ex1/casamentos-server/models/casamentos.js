var mongoose = require('mongoose')

var casamentoSchema = new mongoose.Schema({
    date:String,
    id:String,
    href:String,
    ref:String,
    title:String
})

module.exports = mongoose.model('casamentos' , casamentoSchema, 'casamentos')