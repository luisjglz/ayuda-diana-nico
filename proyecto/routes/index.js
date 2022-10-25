var express = require('express');
var router = express.Router();
const Usuarios = require("../controllers/usuario")
/* GET home page. */
router.get('/', Usuarios.usuario_list);

/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;
