// IMPORTAMOS "express" PARA CREAR EL SERVIDOR
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const PORT = 3001;

const mongoose = require('mongoose');

//CONEXION A LA BASE DE DATOS
const dbconnect = mongoose.connect('mongodb://jorgesoto:1193262929@localhost:27017/BD_Tareas?authSource=admin')
    .then(()=> console.log("Base de datos conectada"))
    .catch(e => console.log(e))


// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

// RUTA PARA ARCHIVOS ESTATICOS EN ESTE CASO LA CARPETA "public"
app.use(express.static(__dirname + "/public"));

// RUTA AL ARCHIVO DE 'rutas'
app.use('/', require('./router/rutas'));
app.use('/usuario', require('./router/Usuarios'));

// PUERTO DEL SERVIDOR
app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
})


// PARA SEGUIR TRABAJANDO Y SUBIR LOS CAMBIOS QUE SE HAGAN
// git add .
// git commit -m "Descripción de los cambios"
// git push origin main