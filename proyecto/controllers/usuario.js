const Usuarios = require ('../models/usuario')

exports.usuario_create_get = function(req, res){
    res.render('usuarios/create')
}

exports.usuario_create_post = function(req, res){
    let temp_user = new Usuarios(req.body.id, req.body.type, req.body.user, req.body.password)
    Usuarios.add(temp_user)
    res.redirect('/usuarios')
} 
/*
exports.usuario_list = function(req, res){
    //res.render('/', {users: Usuarios})
    Usuarios.find({}, function(err, usr){
        res.render("/", {user:"a"})
    })
}
*/