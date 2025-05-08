const express = require('express');
// HACEMOS UNA INSTANCIA DE 'router'
const router = express.Router();

const Usuario = require('../models/schema')
// RUTA PARA HACER LA CONSULTA A LA BASE DE DATOS Y LA RENDERIZAMOS EN EL ARCHIVO DONDE LA VAMOS A MOSTRAR EN LA VISTA
router.get('/', async (req, res)=>{
    try{
        const arrayUsuariosDB = await Usuario.find()
        res.render("usuario",{
            arrayUsuarios : arrayUsuariosDB
        })
    }catch (e){
        console.log(e)
    }
})

module.exports = router;