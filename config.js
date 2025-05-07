// CONEXION A MONGODB
const mongoose = require('mongoose');

//CONEXION A LA BASE DE DATOS
const dbconnect = mongoose.connect('mongodb://jorgesoto:1193262929@localhost:27017/BaseDeDatos?authSource=admin')
    .then(()=> console.log("Base de datos conectada"))
    .catch(e => console.log(e))

// EXPORTAMOS LA CONEXION A LA BASE DE DATOS
module.exports = dbconnect;


// PARA SEGUIR TRABAJANDO Y SUBIR LOS CAMBIOS QUE SE HAGAN
// git add .
// git commit -m "Descripción de los cambios"
// git push origin main