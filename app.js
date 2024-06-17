// previamente instalar express body-parser consolidate handlebars
//ES NESESARIO INSTALAR PARA LOS MODULOS PAQUETES JSON

//npm install express body-parser consolidate handlebars
//esta app se ejecuta con node app.js o nodemon app.js

////////////////Importaciones y Configuración Inicial
const express = require("express");// Importa el framework Express
const app = express();
const engine = require('consolidate');//Importa la librería Consolidate, que permite usar múltiples motores de plantillas con Express.

////////////////Configurar el motor de plantillas
app.engine("hbs",engine.handlebars); //.hbs extension para archivos con la extensión .hbs
app.set("views","./views");//Establece el directorio views como el lugar donde se encuentran las plantillas
app.set("view engine","hbs");// Define hbs como el motor de plantillas predeterminado.

///////////////Función para Partials (Plantillas Parciales)
var partials = function() {     //Función que devuelve un objeto con las plantillas parciales header y footer
    return {header: '_header', footer: '_footer'};
}

///////////////Definir Rutas
app.get('/',function(req,res){//Define una ruta GET en la raíz (/) que responde con un mensaje simple en HTML.
    res.send('<h1>Servidor Ejecutandose</h1>');
});


app.get('/home',function(req,res){ //Define una ruta GET para /home.
    var partials = {header: '_header', sidebar: '_sidebar'};//efine partials locales header y sidebar.

    personas = [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
      ]

    res.render('home',{partials:partials,personas:personas});
    // Renderiza la plantilla home con los partials y datos proporcionados.
})

////////////////////Ruta para /datos
app.get('/datos',function(req,res){

    person = {
        firstname: "Bill",
        lastname: "Gates",
      };

      personas = [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
      ]

      
//a qui se defino e lhbs
    res.render('plantilla01',{nombre:'Juan Gonzales',person:person,personas:personas});
});


//modulo router con productos
///////////Incluir módulo de productos:
var productosController = require("./controllers/productos.js");
app.use("/productos",productosController);


//nos dice en que puerto
app.listen(3000,function(){
    console.log("servidor ejecutando");
});