/*
    Ejemplo de servidor utilizando middlewares:
        se configuran con la sentencia:
            app.use(function (req, res, next){
                //Código del middleware
                next(); //Necesario para que continúe en la siguiente instrucción, de otro modo se quedaria estancado el servidor
            });

    También es posible usar middlewares de terceros como es el caso de morgan:
            instalar con el comando: npm install morgan
            requerirlo con require()
            ver la documentación de morgan en https://www.npmjs.com/package/morgan

    También se introduce el concepto de configuraciones:
            se especifican con app.set('nombre', <valor>);
*/

const express = require('express');
const app = express();

const morgan = require('morgan'); //Módulo middleware para obtener las rutas solicitadas desde el cliente

//Settings:
//________________________________________________________________________________________________________
app.set('appName', 'My first server');  //Configura una variable llamada appName con el valor especificado
app.set('port', 3000);                  //puerto para escuchar peticiones configurada en una variable y utilizarla en lugar del número del puerto directamente




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
//________________________________________________________________________________________________________

//app.listen(3000, ()=>{})      //Se puede utilizar el valor del puerto directamente o usando la variable definida:
app.listen(app.get('port'), ()=>{
    //Ejemplo de cómo utilizar la variable appName configurada anteriormente
    console.log(app.get('appName'));  
    console.log('Server on port 3000...');
});