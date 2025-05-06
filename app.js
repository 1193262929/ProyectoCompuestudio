// IMPORTAMOS "express" PARA CREAR EL SERVIDOR
const express = require('express')
const dbconnect = require('./config')

const router = express.Router();
router.get("/", (req, res) => {
    res.send("Hola mostrando texto en nuestro pagina del proyecto :)")
})

const app = express();
app.use(router)
// PUERTO DEL SERVIDOR
app.listen(3001, ()=>{
    console.log("Servidor en el puerto: 3001");
})

