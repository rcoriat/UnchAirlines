exports.home = function(req, res) {
    res.render('home', {
        title : 'UA - Home'
    }); 
};

exports.estadovuelo = function(req, res) {
    res.render('estado_vuelo');  
};


exports.notFound = function(req, res) {
    res.render('home'); 
};

/*
exports.add = function(req, res) {
    var usuario = require("../models/usuario");
    
    if(req.body.pasaporteEliminar != null){
        var eliminar = usuario;

        eliminar.findOne({
            raw : true,
            where : {
                pasaporte : parseInt(req.body.pasaporteEliminar)
            }
        }).then(function(usuario) {
            if(usuario != undefined){
                eliminar.destroy({
                    where : {
                        pasaporte : parseInt(req.body.pasaporteEliminar)
                    }
                });

                res.render('usuarios', {
                    title : 'UA - Usuarios'
                }); 
            }
            else{
                console.log("No se ha encontrado el pasaporte solicitado.");
                res.render('usuarios', {
                    title : 'UA - Usuarios'
                }); 
            }
            res.end();
        })
    }
    else if(req.body.pasaporteEditar != null){
        var editar = usuario;
        editar.findOne({
            raw : true,
            where: {
                pasaporte: parseInt(req.body.pasaporteEditar)
            }
        }).then(function(usuario){
            if(usuario != undefined){
                res.render('editar', {
                    title : 'UA - Editar Usuario',
                    usuario : usuario
                }); 
            }
            else{
                console.log("No se ha encontrado el pasaporte solicitado.");
                res.render('usuarios', {
                    title : 'UA - Usuarios'
                }); 
            }
            res.end();
        })
        .catch(err => console.log(err));
    }
    else{
        let pasaporte = req.body.pasaporteA;
        let nombre = req.body.nombreA;
        let apellido = req.body.apellidoA;
        let telefono = req.body.telfA;
        let correo = req.body.correoA;
        let fecha_nacimiento = req.body.nacimientoA;
        let direccion = req.body.direccionA;
        let sexo = req.body.sexoA;
        let nacionalidad = req.body.nacionalidadA;

        usuario.create({
            pasaporte: pasaporte,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            fecha_nacimiento: fecha_nacimiento,
            direccion: direccion,
            sexo: sexo,
            nacionalidad: nacionalidad
        }).then(usuario => res.render('usuarios', {
            title : 'UA - Usuarios'
        }))
        .catch(err => console.log(err));
    }
}

exports.edicion = function(req, res) {
    var usuario = require("../models/usuario");

    const data = {
        nombre : req.body.nombreE,
        apellido : req.body.apellidoE,
        telefono : req.body.telfE,
        correo : req.body.correoE,
        direccion : req.body.direccionE,
        sexo : req.body.sexoE,
        nacionalidad : req.body.nacionalidadE
    }
    
    usuario.update(data, {
        where:{
            pasaporte: parseInt(req.body.pasaporteE)
        }
    })
    .then(function() {
        console.log("Exitoso");
        res.render('usuarios', {
            title : 'UA - Usuarios'
        }); 
        res.end();
    })
}

exports.lista = function(req, res) {
    var usuario = require("../models/usuario");
    var moment = require('moment');

    usuario.findAll({ raw : true }).then(function (usuarios) {
        res.render('lista', {
            moment : moment,
            usuarios : usuarios
        })
    }).catch(err => console.log(err));
}
*/