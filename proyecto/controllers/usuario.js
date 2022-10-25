const Usuarios = require ('../models/usuario')

exports.usuario_create_get = function(req, res){
    res.render('usuario/create')
}

exports.usuario_create_post = function(req, res){
    let temp_user = new Usuarios(req.body.id, req.body.type, req.body.user, req.body.password)
    Uusarios.add(temp_user)
    res.redirect('/usuarios')
} 