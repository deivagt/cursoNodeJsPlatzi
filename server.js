const express = require('express');
const PORT = '3000';

//Router
const router = require('./network/routes')

//Crear app
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
router(app);

//Servir archivos estaticos
app.use('/app',express.static('public',));

app.listen(PORT);
console.log('La aplicacion esta escuchando en', PORT)