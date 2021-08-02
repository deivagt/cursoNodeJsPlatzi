/* ---------- */
//ANTES SE USABA BODYPARSER
//const bodyParser = require('body-parser')// Deprecated
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
/* ---------- */
const express = require('express');
const PORT = '3000';

//Router
//const router = require('./components/message/network')
const router = require('./network/routes')

//Crear app
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(router);
router(app);

//Servir archivos estaticos
app.use('/app',express.static('public',));

app.listen(PORT);
console.log('La aplicacion esta escuchando en', PORT)