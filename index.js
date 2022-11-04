const express = require('express');
const morgan = require('morgan');
const cors= require('cors');

const servidor= express();

servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use(cors());

servidor.get("/", (peti, resp)=>{
    resp.send("Hola desde servidor REST");
});

servidor.use("/libro", require('./rutas/ruta-libro'));
servidor.use("/autor", require('./rutas/ruta-autor'));

servidor.listen(3000, ()=>{
    console.log('Este es un mensaje de prueba agregado desde Kate');
    console.log("Servidor escuchando en el puerto 3000");
});
