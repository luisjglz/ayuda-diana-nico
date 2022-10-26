const mongoose = require('mongoose')
let Schema = mongoose.Schema

let usuarioSchema = new Schema({
    type: {type: String, required: true},
    user: {type: String, required: true},
    password: {type: String, required: true}
})

usuarioSchema.statics.allAdmins = function allAdmins(cb){
    /*
    Usuarios.find({}, function(err, usr){
        res.render("/",{user: usr})
    })
    */
    return this.find({}, cb)
}

module.exports = mongoose.model('Usuarios', usuarioSchema)