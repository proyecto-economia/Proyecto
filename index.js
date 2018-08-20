var express = require('express');
var session = require("express-session");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('public'));
var publicCliente = express.static("public-cliente");

app.use(session({ secret: "ASDFE$%#%", resave: true, saveUninitialized: true }));

//app.get('/',function(peticion,respuesta){});

app.use(
    function (peticion, respuesta, next) {
        if (peticion.session.tipoUsuario) {
            if (peticion.session.tipoUsuario == 1)
                publicCliente(peticion, respuesta, next);
        }
        else
            return next();
    }
);

app.get("/obtenerSesion", function (peticion, respuesta) {
    respuesta.send(peticion.session.tipoUsuario);
});

/*function verificarAutenticacion(peticion, respuesta, next) {
    if (peticion.session.tipoUsuario)
        return next();
    else
        respuesta.send("ERROR, ACCESO NO AUTORIZADO");
}*/

app.get("/logout", function (peticion, respuesta) {
    peticion.session.destroy();
    respuesta.send("Sesion eliminada");
});

app.post('/cliente', function (peticion, respuesta) {
    peticion.session.tipoUsuario = peticion.body.tipoUsuario;
    respuesta.send(peticion.session.tipoUsuario);
});

app.listen(5000);