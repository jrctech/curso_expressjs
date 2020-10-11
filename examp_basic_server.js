/*
    Ejemplo de un servidor básico utilizando node.js y express
    express se instala desde https://www.npmjs.com/package/express, utilizando el comando:
        npm install express
 */

const express = require('express');
const app = express();

//Rutas:
//Principal:
app.get('/', (req,res) => {
    res.end("Hello World");
});

//Login:
app.get('/login', (req,res) => {
    res.end("Login page... under construction");
});

//Default (Not found):
app.get('*', (req,res) => {
    res.status(404);
    res.end("The requested resource is not found!");
});

app.listen(3000, ()=>{
    console.log('Server on port 3000...');
});