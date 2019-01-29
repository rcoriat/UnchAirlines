var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var routes = require('./routes');
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

//---------//
//   DB   //
//-------//

var db = require('./config/database');

//---------//
// Routes //
//--GET--//

// Home
app.get('/', routes.home);

//Aviones
app.get('/aviones', routes.aviones);

//Usuarios
app.get('/usuarios', routes.usuarios);

//Lista
app.get('/lista', routes.lista);

//Editar
app.get('/editar', routes.editar);

// 404
app.get('*', routes.notFound);

//---------//
// Routes //
//--POST-//

app.post('/usuarios', routes.add);

app.post('/editar', routes.edicion);

///////////////////////////////////////

app.listen(3000, function(){
    console.log("3000");
});

