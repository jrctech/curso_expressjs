const express = require('express');
const router = express.Router();

//router es un objeto, entonces agregamos componentes a ese objeto y luego lo exportamos:

//Rutas:
//________________________________________________________________________________________________________
//Principal:
router.get('/', (req,res) => {
    res.render('index.ejs');
});

//Login:
router.get('/login', (req,res) => {
    res.render('login');
});

//________________________________________________________________________________________________________

module.exports = router;    //Exportamos el objeto router