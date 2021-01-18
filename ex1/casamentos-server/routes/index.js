var express = require('express');
var router = express.Router();
var CasamentosControl = require('../controllers/casamentos')


/* GET home page. */
router.get('/api/casamentos', function(req, res, next) {
  if(req.query.nome !=null){
    CasamentosControl.exe3(req.query.nome)
      .then(dados => res.status(200).jsonp(dados))
      .catch(err => res.status(500).jsonp(err))
  }
  else if(req.query.ano != null){
    console.log(req.query.byAno)
    CasamentosControl.exe4(req.query.ano)
      .then(dados => res.status(200).jsonp(dados))
      .catch(err => res.status(500).jsonp(err))
  }
  else {
    CasamentosControl.exe1()
      .then(dados => res.status(200).jsonp(dados))
      .catch(err => res.status(500).jsonp(err))
  }
});


router.get('/api/casamentos/:id', function(req, res, next) {
  CasamentosControl.exe2(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(err => res.status(500).jsonp(err))
});


module.exports = router;
