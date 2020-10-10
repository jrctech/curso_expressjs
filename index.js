const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.end("Hello World");
});

app.get('/login', (req,res) => {
    res.end("Login page... under construction");
});

app.get('*', (req,res) => {
    res.status(404);
    res.end("The requested resource is not found!");
});

app.listen(3000, ()=>{
    console.log('Server on port 3000...');
});