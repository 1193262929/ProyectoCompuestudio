const mongoose = require('mongoose');
// INSTANCIAMOS "schema" DE MONGOOSE
const Schema = mongoose.Schema;

// SCHEMA DE DONDE VAMOS A RECIBIR LOS DATOS DE LA BASE DE DATOS
const usuarioSchema = new Schema({
    tarea: {
        type: String
    },
    area: {
        type: String
    },
    descripcion: {
        type: String
    },
    estado: {
        type: String
    }
})
// ALMACENAMOS EL MODELO --> PASAMOS LA COLLECTION DE LA BASE DE DATOS Y EL NUEVO SCHEMA
const Usuario = mongoose.model('tareas', usuarioSchema);
// EXPORTAMOS EL SCHEMA
module.exports = Usuario;






