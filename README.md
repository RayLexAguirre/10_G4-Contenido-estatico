![Logo](img/ucol-logo.jpg)

# Práctica 10: Contenido estático

> Primera Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- PROGRAMACIÓN WEB
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

- Nodemon server
- Express module
- Objetos
- Parametros
- app.use

> ENTREGA: DOMINGO 27 DE MARZO DEL 2022

## INFORMACIÓN ADICIONAL

Un aspecto muy utilizado en el desarrollo web está asociado con el contenido estático, esos archivos o contenidos que no cambian durante la ejecución de nuestra aplicación, tales como los archivos CSS. En esta práctica, configuraremos express para que asocie el contenido estático a un directorio en particular y utilizaremos un archivo CSS básico, para cambiar el estilo de nuestro HTML. Una ventaja de mapear el contenido estático a una carpeta virtual, es que nuestro HTML no revela la estructura de directorios del servidor que lo contiene.

## EXPLICACIÓN DEL PROCESO

1. Crea una carpeta llamada "practica_11"

2. Inicializa NPM con npm init -y

3. Instala los paquete express con npm i express y nodemon con npm install -g nodemon

4. Crea un nuevo archivo app.js en el cual se le pasara todo el codigo hecho en la practica anterior

5. Crea una nueva carpeta llamada "public" dentro de la carpeta "practica_11"

6. Dentro de la carpeta "public" crea un nuevo archivo style.css

7. Dentro del archivo style.css se le escribira body y dentro de este tendra un front-family : 'Roboto Condensed', sans-serif;

8. En el archivo app.js se escribira un app.use donde crearemos una carpeta virtual llamada "assets" y ese nombre sera mapeado con la carpeta fisica llamada "public"

9. Se modifica el route handler raiz al colocaran backticks en lugar de comillas para poder insertar otra etiqueta HTML dentro de head, la etiqueta se llamara link y esta contendra rel, href y type.

10. Ahora se ejecuta el comando "nodemon app” en la terminal y acccede a localhost:3000 para observar el resultado

11. Ahora se cambia el orden de los route handler del de person y api, ademas en el navegador observa el codigo fuente para poder observar lo impreso

12. Ahora se colocara otro app.use despues del anterior que se puso anteriormente, este app.use debera estar en la raiz y tiene dentro una funcion que estara regresando en la terminal la dirrecion que se ingresa en el navegador

## RECURSOS

- https://www.npmjs.com/
