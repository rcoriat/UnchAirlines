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

//Estado del vuelo
app.get('/estado-vuelo', routes.estadovuelo);

// 404
app.get('*', routes.notFound);

//---------//
// Routes //
//--POST-//
/*
app.post('/usuarios', routes.add);

app.post('/editar', routes.edicion);
*/
///////////////////////////////////////

app.listen(3000, function(){
    console.log("3000");
});

