// ARCHIVO PARA DEFINIR LAS RUTAS QUE USARÁ EL SERVIDOR
const express = require('express');
// HACEMOS UNA INSTANCIA DE 'router'
const router = express.Router();

// RESPUESTA DEL SERVIDOR SI EL CLIENTE DESEA INGRESAR A LA PAGINA PRINCIPAL
router.get('/',(req, res) =>{
    res.render("index")// Renderiza la plantilla "index.ejs" ubicada en la carpeta de vistas
})

// DEFINIMOS UNA RUTA PARA CREAR UNA NUEVA TAREA
router.get('/crear',(req, res) =>{
    res.render("crear", {tituloCrear: "CREAR NUEVA TAREA"})
})
// EXPORTAMOS EL ROUTER PARA QUE PUEDA SER UTILIZADO EN OTROS ARCHIVOS
module.exports = router;