const Usuarios = require ('../models/usuario')

exports.usuario_create_get = function(req, res){
    res.render('usuarios/create')
}

exports.usuario_create_post = function(req, res){
    let temp_user = new Usuarios(req.body.id, req.body.type, req.body.user, req.body.password)
    Usuarios.add(temp_user)
    res.redirect('/usuarios')
} 

exports.usuario_list = function(req, res){
    Usuarios.find({}, function(err, usr){
        res.render("users/index", {users:usr})
    })
}

//endpoint para agregar usuarios (lo pueden probar en postman)
exports.usuario_create = function(req, res){
    
    let usr = Usuarios.createInstance(req.body.type, req.body.user, req.body.password)
    Usuarios.add(usr)
    

    res.status(200).json({
        user: usr
    })
}
