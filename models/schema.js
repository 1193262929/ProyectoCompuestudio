const mongoose = require('mongoose');
// INSTANCIAMOS "schema" DE MONGOOSE
const Schema = mongoose.Schema;

// SCHEMA DE DONDE VAMOS A RECIBIR LOS DATOS DE LA BASE DE DATOS
const usuarioSchema = new Schema({
    username: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    status: {
        type: String
    }
})
// ALMACENAMOS EL MODELO --> PASAMOS LA COLLECTION DE LA BASE DE DATOS Y EL NUEVO SCHEMA
const Usuario = mongoose.model('users', usuarioSchema);
// EXPORTAMOS EL SCHEMA
module.exports = Usuario;






