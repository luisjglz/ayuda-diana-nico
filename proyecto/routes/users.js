var express = require('express');
var router = express.Router();

let usuarioController = require('../controllers/usuario')

//Crear un nuevo administrador
router.get('/create', usuarioController.usuario_create_get);

//endpoint para añadir usuarios
router.post('/create',usuarioController.usuario_create);

router.get('/', usuarioController.usuario_list)

module.exports = router; 

