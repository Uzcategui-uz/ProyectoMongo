let Profesional = require("../models/profesional");

class profesionalController {
    constructor() {}

    getProfesionales(req, res) { //:D
        if (req.query.id != null) {
            Profesional.find({ nombre: req.query.id }).then(pro => {
                res.send(pro);
            }).catch(err => {
                console.log("Error al obtener el profesional " + err);
                process.exit(-1);
            })
        } else {
            Profesional.find().then(pro => {
                res.send(pro);
            }).catch(err => {
                console.log("Error al obtener el profesional " + err);
                process.exit(-1);
            })
        }
    }

    insertProfesionales(req, res) {
        new Profesional({
            nombre: req.body.nombre,
            edad: req.body.edad,
            nacionalidad: req.body.nacionalidad,
            profesion: req.body.profesion
        }).save().then(function(pro) {
            res.send(pro);
        }).catch(function(err) {
            console.log("Error al guardar el profesional " + err);
            process.exit(-1);
        });
    }

    updateProfesionales(req, res) {
        Profesional.updateOne({
            nombre: req.body.nombre
        }, {
            edad: req.body.edad,
            nacionalidad: req.body.nacionalidad,
            profesion: req.body.profesion
        }).then(function(pro) {
            res.send(pro);
        }).catch(function(err) {
            console.log("Error al guardar el profesional " + err);
            process.exit(-1);
        });
    }

    deleteProfesionales(req, res) {
        Photo.deleteOne({
            nombre: req.body.nombre
        }).then(function() {
            res.send({ status: "ok", message: "deleted" });
        }).catch(function(err) {
            console.log("Error al eliminar el profesional " + err);
            process.exit(-1);
        });
    }
}

module.exports = profesionalController;