/*
    Ejemplo de servidor utilizando el motor de vistas ejs (express javascript)
    
    El motor es un módulo que se istala desde https://www.npmjs.com/package/ejs, con el comando:
        npm install ejs (revisar el archivo package.json para ver dependencias).

    Las instrucciones principales para comenzar a utilizar vistas son:
        app.set('views', __dirname + '/views'); //Establece la ruta a las vistas
        app.set('view engine', 'ejs');  //Define el motor de plantillas a utilizar
        res.render('archivo.ejs');      //Renderiza la vista especificada y la envía como respuesta

        Para incluir archivos en una vista:
            dentro del archivo .ejs: (debe ser extensión ejs para que reconozca las etiquetas de ejs)
                <%- include('partials/navigation.ejs'); %>  incluye el archivo especificado con la ruta
*/

const express = require('express');
const app = express();

const morgan = require('morgan'); //Módulo middleware para obtener las rutas solicitadas desde el cliente


//Settings:
//________________________________________________________________________________________________________
app.set('appName', 'My first server');  //Configura una variable llamada appName con el valor especificado
app.set('port', 3000);                  //puerto para escuchar peticiones configurada en una variable y utilizarla en lugar del número del puerto directamente

app.set('views', __dirname + '/views'); //Establece la ruta a las vistas
//El motor de plantillas ejs se instala con npm install ejs y es uno de los pocos módulos que no necesita requerirlo con require('ejs')
app.set('view engine', 'ejs');  //Define el motor de plantillas a utilizar

//________________________________________________________________________________________________________

//Middlewares:
//________________________________________________________________________________________________________
app.use(function (req, res, next){  //Función que devuelve la ruta
    console.log('URL: ', req.url);
    next();
});

app.use((req,res,next)=>{       //Sólo para demostrar el flujo de ejecución...
    console.log('Ha llegado al segundo middleware...');
    next();
});

//Uso del middleware de morgan para obtener la ruta (ver opciones en npmjs.com/package/morgan)
app.use(morgan('dev'));     
//________________________________________________________________________________________________________


//Rutas:
//________________________________________________________________________________________________________
//Principal:
app.get('/', (req,res) => {
    res.render('index.ejs');
});

//Login:
app.get('/login', (req,res) => {
    res.render('login');
});

//Default (Not found):
app.get('*', (req,res) => {
    res.status(404);
    res.end("The requested resource is not found!");
});
//________________________________________________________________________________________________________

//app.listen(3000, ()=>{})      //Se puede utilizar el valor del puerto directamente o usando la variable definida:
app.listen(app.get('port'), ()=>{
    //Ejemplo de cómo utilizar la variable appName configurada anteriormente
    console.log(app.get('appName'));  
    console.log('Server on port 3000...');
});