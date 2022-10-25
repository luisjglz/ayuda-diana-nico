const mongoose = require('mongoose')
let Schema = mongoose.Schema

let registroSchema = new Schema({
    codigoQR: {type: String, required: true},
    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    estatus: {type: String, required: true}
})

module.exports = mongoose.model('Registros', registroSchema)