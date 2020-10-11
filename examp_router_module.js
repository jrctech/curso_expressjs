/*
    Ejemplo de servidor utilizando el módulo Router de express

    Se utiliza para crear aplicaciones modulares y tener las rutas del servidor en archivos separados incluso para generar diferentes modulos o aplicaciones en el mismo servidor.  En este caso se muestra que se tiene el archivo routes.js que contiene las rutas de las páginas que el usuario puede navegar y además el archivo routes-api.js, el cual podria ser utilizado para manejar las rutas de una posible api.  En el ejemplo al acceder al servidor a través de la ruta <hostname>:3000/api, se responde desde el archivo routes-api.js con un objeto json.  Mostrando la funcionalidad del módulo router para crear módulos y subprogramas.


*/

const express = require('express');
const app = express();

const morgan = require('morgan'); //Módulo middleware para obtener las rutas solicitadas desde el cliente

//Requiere las rutas desde el archivo routes.js que está en el mismo directorio. Luego se pueden llamar a través de un middleware. (ver mas adelante en la sección Rutas)
const routes = require('./routes'); 
const routesApi = require('./routes-api');

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
app.use(routes);
app.use('/api', routesApi);  //El primer parámetro especifica que se utilice el módulo routesApi que se importó cuando la ruta solicitada sea '/api'

//Cuando llega una petición GET al servidor, se prueban las rutas del archivo routes.js de manera secuencial, si no coincide ninguna entonces se continúa con el archivo routes-api.js y finalmente si no coincide ninguna ruta, se evalúa la función por defecto especificada a continuación.

//Default (Not found):
app.get('*', (req,res) => {
    res.status(404);
    res.end("The requested resource is not found!");
});

//app.listen(3000, ()=>{})      //Se puede utilizar el valor del puerto directamente o usando la variable definida:
app.listen(app.get('port'), ()=>{
    //Ejemplo de cómo utilizar la variable appName configurada anteriormente
    console.log(app.get('appName'));  
    console.log('Server on port 3000...');
});