const express = require('express');
// Aqui van todos los componentes
const message = require('../components/message/network');

const routes = (server)=>{
    server.use('/message', message)
}

module.exports = routes;