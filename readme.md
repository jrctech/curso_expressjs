Curso de express sobre node.js:

Este repositorio contiene ejemplos de creación de servidores básicos utilizando express y node.js.

Se estudia además la utilización de módulos que trabajan sobre express como ejs, y se utiliza como motor de vistas y router (que es un módulo de express) que sirve para organizar las rutas del servidor e incluirlas en diferentes archivos, permitiendo la creación de subprogramas.

El repositorio consta de varios ejemplos, cuyo orden cronológico, para ir desde el mas simple al más elaborado es:

    1) examp_basic_server.js
    2) examp_serv_middlewares.js
    3) examp_routing_serv_ejs.js
    4) examp_router_module.js

    se puede utilizar el comando node <nombre-del-archivo.js> para ejecutar cada programa, o también a través de npm, de la siguiente manera: (ver archivo package.json en la sección "scripts")

    1) npm run basic_server
    2) npm run basic_middlewares
    3) npm run basic_routing
    4) npm run basic_router_module