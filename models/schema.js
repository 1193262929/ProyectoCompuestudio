// IMPORTAMOS MONGOOSE PARA MANEJAR LA CONEXIÓN Y MODELOS DE LA BASE DE DATOS
const mongoose = require('mongoose');
// INSTANCIAMOS "Schema" DE MONGOOSE PARA DEFINIR LA ESTRUCTURA DE LOS DATOS
const Schema = mongoose.Schema;

// DEFINIMOS EL ESQUEMA "usuarioSchema" QUE REPRESENTARÁ LA ESTRUCTURA DE LOS DATOS EN LA BASE DE DATOS
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
// EXPORTAMOS EL SCHEMA PARA QUE PUEDA SER USADO EN OTRAS PARTES
module.exports = Usuario;






