const Registros = require ('../models/registro')

exports.registro_create_get = function(req, res){
    res.render('registro/create')
}

exports.registro_create_post = function(req, res){
    let temp_reg = new Registros(req.body.id, req.body.codigoQR, req.body.nombre, req.body.correo, req.body.estatus)
    Registros.add(temp_reg)
    res.redirect('/registros')
} 

exports.registro_update_get = function(req, res){
    let reg = Registros.findById(req.params.id)
    res.render('registros/update', {reg})
}

exports.registro_update_post = function(req, res){
    let reg = Registros.findById(req.body.id)
    reg.id = req.body.id
    reg.codigoQR = req.body.codigoQR
    reg.nombre = req.body.nombre
    reg.correo = req.body.correo
    reg.estatus = req.body.estatus

    res.redirect('/registros')
}