var express = require('express');
var router = express.Router();
var axios = require('axios')
var fs = require('fs');

/* GET home page. */
var token;
axios.post('http://clav-api.di.uminho.pt/v2/users/login', {username: "pri2020@teste.uminho.pt", password:"123"})
    .then(dat => token = dat.data.token);
console.log(token)

router.get('/' , function(req,res){
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + token)
    .then(dados => {
      res.render('index', {dados:dados.data})
  })
    .catch(err => res.status(500).jsonp({err: err}))
})  

router.get('/classes/:id' , function(req,res){
  axios.get('http://clav-api.di.uminho.pt/v2/classes/' + req.params.id + '?nivel=1&token=' + token)
    .then(dados => {
      res.render('tipo', {dados:dados.data})
  })
    .catch(err => res.status(500).jsonp({err: err}))
})  


// AQUECIMENTO 
router.get('/aq/ex1' , function(req,res){
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c750?token=' + token)
    .then(dados => {
      var json=[];
      for(i in dados.data.filhos){
        axios.get('http://clav-api.di.uminho.pt/v2/classes/c750.' + dados.data.filhos.codigo + '/descendencia?token=' + token)
          .then(da => json.push(da))
      }
      res.status(200).jsonp(json)
  })
    .catch(err => res.status(500).jsonp({err: err}))
})  





module.exports = router;
