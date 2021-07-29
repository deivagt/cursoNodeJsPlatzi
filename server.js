const express = require('express')

/* ---------- */
//ANTES SE USABA BODYPARSER
//const bodyParser = require('body-parser')// Deprecated
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
/* ---------- */

const router = express.Router();// Permite controlar los metodos 
const PORT = '3000';
//Crear app
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

router.get('/message', (req,res)=>{
    console.log(req.headers);
    res.header({
        "custom-header":"Valor personalizado"
    })
    console.log(req.query);
    console.log(req.body);    
    res.send('Lista de Mensajes');
})
router.post('/message', (req,res)=>{
    res.send('Mensaje añadido correctamente')
})
router.delete('/message', (req,res)=>{
    res.status(201).send()
})
// app.use('/',(req,res)=>{
//     res.send('Hola');
// })

app.listen(PORT);
console.log('La aplicacion esta escuchando en', PORT)