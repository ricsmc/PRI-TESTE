var mongoose = require('mongoose')
var Casamento = require('../models/casamentos')


module.exports.exe1 = () => {
    return Casamento.find().select({date:1, title:1, ref:1}).exec()
}

// Procurar o Casamento id
module.exports.exe2 = id => {
    return Casamento.findOne({_id: id}).exec()
}

// Devolve a lista de Casamentolicações que tenham o campo "type" com o valor "YYY";
module.exports.exe3 = id => {
    return Casamento.find({title: {$regex : ".*" + id + ".*"}}).exec()
}

// Devolve a lista de Casamentolicações que tenham o campo "type" com o valor "YYY" e o campo "year" com um valor superior a "AAAA";
module.exports.exe4 = ano => {
    console.log(ano)
    return Casamento.find({date: {$regex: "" + ano + '\/' + ano}}).exec()
}


// Devolve a lista de Casamentolicações que tenham o campo "type" com o valor "YYY" e o campo "year" com um valor superior a "AAAA";
module.exports.exe_ = (id,ano) => {
    return Casamento.find({type: id, year: {$gt : ano}}).exec()
}


module.exports.lookUp10 = p => {
    return Casamento.find().sort({upload_date : -1})
}

// Inserir o Casamento u
module.exports.insert = u => {
    console.log(JSON.stringify(u))
    var newCasamento = new Casamento(u)
    return newCasamento.save()
}

// Remover o Casamento id
module.exports.remove = id => {
    return Casamento.deleteOne({_id : id})
}

// Editar o Casamento id para u
module.exports.edit = (id,u) => {
    return Casamento.findByIdAndUpdate(id, u, {new: true})
}
