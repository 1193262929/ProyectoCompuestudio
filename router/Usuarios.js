// IMPORTAMOS EXPRESS PARA MANEJAR LAS RUTAS Y SOLICITUDES HTTP
const express = require('express');
// HACEMOS UNA INSTANCIA DE 'router'
const router = express.Router();
// IMPORTAMOS EL MODELO "Usuario" PARA INTERACTUAR CON LA BASE DE DATOS
const Usuario = require('../models/schema')

// RUTA PARA HACER LA CONSULTA A LA BASE DE DATOS Y LA RENDERIZAMOS EN EL ARCHIVO DONDE LA VAMOS A MOSTRAR EN LA VISTA
router.get('/', async (req, res)=>{
    try{
        // CONSULTAMOS TODAS LAS TAREAS EN LA BASE DE DATOS
        const arrayUsuariosDB = await Usuario.find()
         // RENDERIZAMOS LA VISTA "usuario.ejs" PASANDO LOS DATOS OBTENIDOS
        res.render("usuario",{
            arrayUsuarios : arrayUsuariosDB
        })
    }catch (e){
        console.log(e)
    }
})

// RUTA PARA CREAR UNA NUEVA TAREA EN LA BASE DE DATOS
router.post('/', async (req, res)=>{
    const body = req.body// RECIBIMOS LOS DATOS DEL FORMULARIO EN EL CUERPO DE LA SOLICITUD
    try{
        // CREAMOS UNA NUEVA ENTRADA EN LA BASE DE DATOS USANDO EL MODELO "Usuario"
        await Usuario.create(body)
        res.redirect('/usuario')

    }catch (error) {
        console.log(error)
    }
})

// DEFINIMOS  UNA RUTA GET QUE RECIBE UN PARAMETRO DINAMICO ":id"
router.get('/:id', async(req, res) =>{
    // EXTRAEMOS EL VALOR DE "id" DESDE LOS PARAMETROS DE LA SOLICITUD "HTTP"
    const id = req.params.id;
   
    try{
        // BUSCAMOS EN LA BASE DE DATOS UN DOCUMENTO EN EL MODELO "Usuario"
        const tareaDB = await Usuario.findOne({_id: id})
        // SI SE ENCUENTRA LA TAREA, RENDERIZAMOS LA VISTA "tarea.ejs"  CON LOS DATOS OBTENIDOS
        res.render('tarea', {
            tarea: tareaDB, // SE PASA LA TAREA ENCONTRADA A LA PLANTILLA "tarea.ejs"
            error: false // INDICAMOS QU NO HUBO ERROR
        })
    }catch(error) {
        console.log(error)
        // RENDERIZAMOS LA VISTA "tarea.ejs" PERO INDICANDO UN ERROR
         res.render('tarea', {
            error: true,
            mensaje: 'No se encuentra la tarea'
        })
    }
})

// DEFINIMOS LA RUTA "delete" CON UN PARAMETRO DINAMICO "id:"
router.delete('/:id', async (req, res)=>{
    // EXTRAEMOS EL "id" DE LOS PARAMETROS DE LA SOLICITUD
    const id = req.params.id

    try{
        // BUSCAMOS Y ELIMINAMOS EL DOCUMENTO EN LA BASE DATOS POR SU "id". TODO ESTO POR MEDIO DE "findByIdDelete()" 
        const tareaDB = await Usuario.findByIdAndDelete({_id:id})
        // VERIFICAMOS SI SE ENCONTRO Y ELIMINO EL DOCUMENTO
        if(tareaDB){
            res.json({
               estado: true,
               mensaje: "Eliminado" // SI EL DOCUMENTO EXISTE SE ELIMINA
            }) 
        }else{
            res.json({
                estado: false, 
                mensaje: "No se puede eliminar..."// SI NO SE ENCONTRO EL DOCUMENTO
            })
        }
    }catch(error){
        console.log(error)// CAPTURAMOS Y MOSTRAMOS CUALQUIER ERROR QUE OCURRA DURANTE LA OPERACION
    }
})

// DEFINIMOS UNA RUTA HTTP TIPO "PUT" CON UN PARAMETRO DINAMICO EL "ID"
router.put('/:id', async (req, res) =>{
    // EXTRAEMOS EL "id" DE LOS PARAMETROS DE LA SOLICITUD
    const id = req.params.id

    // EXTRAEMOS EL CUERPO DE LA SOLICITUD, DONDE VIENEN LOS DATOS PARA ACTUALIZAR
    const body = req.body

    try{
        // BUSCAMOS Y ACTULIZAAMOS EL DOCUMENTO EN LA BASE DE DATOS CON EL "id"
        const tareaDB = await Usuario.findByIdAndUpdate(// ACTUALIZA EL DOCUMENTO Y DEVUELVE EL ANTIGUO
            id, body, {useFindAndModify: false})// ES PARA EVITAR ADVERTENCIAS EN VERSIONES MODERNAS
         // RESPUESTA JSON EN CASO DE QUE LA ACTUALIZACION SEA EXITOSA
         res.json({
               estado: true,
               mensaje: "Editado" 
            })
    }catch (error){
        console.log(error)
         res.json({ // RESPUESTA EN CASO DE QUE HAYA UN ERROR
               estado: false,
               mensaje: "Error" 
            })
    }
})

module.exports = router;