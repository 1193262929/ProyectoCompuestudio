// IMPORTAMOS "express" PARA CREAR EL SERVIDOR
const express = require('express');
const dbconnect = require('./config');
const app = express();

const PORT = 3001;

// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

// RUTA PARA ARCHIVOS ESTATICOS EN ESTE CASO LA CARPETA "public"
app.use(express.static(__dirname + "/public"));

// RESPUESTA DEL SERVIDOR SI EL CLIENTE DESEA INGRESAR A LA PAGINA PRINCIPAL
app.get('/',(req, res) =>{
    res.render("index", {titulo: "Titulo dinamico"})
})

app.get('/registrar',(req, res) =>{
    res.render("tareas", {TituloTareas: "Tus tareas"})
})

// PUERTO DEL SERVIDOR
app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
})

