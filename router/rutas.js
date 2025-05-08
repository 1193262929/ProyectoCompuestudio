// ARCHIVO PARA DEFINIR LAS RUTAS 

const express = require('express');
// HACEMOS UNA INSTANCIA DE 'router'
const router = express.Router();

// RESPUESTA DEL SERVIDOR SI EL CLIENTE DESEA INGRESAR A LA PAGINA PRINCIPAL
router.get('/',(req, res) =>{
    res.render("index", {titulo: "Titulo dinamico"})
})

router.get('/registrar',(req, res) =>{
    res.render("tareas", {TituloTareas: "Tus tareas"})
})


module.exports = router;