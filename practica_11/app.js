const express = require("express"); // importamos la dependencia
const app = express(); //declaramos una app de express

var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor

app.use("/assets", express.static(__dirname + "/public")); //Aqui se especifica a “la aplicación de express”, que el directorio virtual para el contenido estático se llama “/assets” y que ese nombre será mapeado a una carpeta física “/public”, que se encuentra en el directorio donde corre la aplicación “__dirname” .
app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
}); //Este es otro uso de app.use es para debuguear, con este app.use podremos observar que es lo que se inserta en la ventana del navegador

//Primera ruta (esta a nivel de raiz /), Hello World!
app.get("/", function (req, res) {
  res.send(
    //Con una etiqueta link estableceremos estableceremos la conexion con el archivo style.css
    `<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>`
  );
});

//En el href se coloca assets pero es una carpeta virtual (definida en la linea 6) que es igual a la carpeta fisica public y dentro de esta esta el archivo style.css

app.get("/person/:id", function (req, res) {
  res.send(
    "<html><head></head><body><h1>Person: " +
      req.params.id +
      "</h1></body></html>"
  ); //req.params.id tomara lo ingresasdo y lo coloca en el texto que se muestra en el servidor
});

app.get("/api", function (req, res) {
  res.json({ firstName: "Jhon", lastName: "Doe" }); //Esto se mostrara en el servidor
});

app.listen(port); //Levanta el servidor y lo pone a escuchar
