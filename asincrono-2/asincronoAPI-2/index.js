import express from 'express';

import {PORT, BASE_URL} from './config/config.js'

import {conectarDB} from './db/mongoose.js'

import cors from 'cors' //para q funcione el fetch al front

import router from './routes/index.routes.js'

const app = express()

console.clear(); //limpiar terminal aal reiniciar proyecto


app.use(cors()); // conectar desde cualquier conexión
app.use(express.json()); // leer datos que vienen en el body de mi req
app.use(express.urlencoded({extended:true})); // leer datos de un form html


conectarDB();


//rutas front

app.get("/", (req,res)=>{
    res.send('Asíncrono 2 con mongo')
})

app.use("/api/v1", router);


// se sabe q es el manejador de errores porq tiene 4 parametros
app.use((err, req, res, next)=>{
    console.error('error en la API:', err)
    res.status(500).json({
        status:'error',
        message: err.message ||'error interno del servidor'
    })
})

app.listen(PORT, ()=>{
    console.log(`servidor funcionando en ${BASE_URL}`)
})