var express = require('express');
var router = express.Router();

let registroController = require('../controllers/registro')

//Crear un nuevo registro
router.get('/create', registroController.registro_create_get);
router.post('/create',registroController.registro_create_post);

//Update de registro
router.get('/:id/update',registroController.registro_update_get);
router-post(':id/update',registroController.registro_update_post);

module.exports = router;