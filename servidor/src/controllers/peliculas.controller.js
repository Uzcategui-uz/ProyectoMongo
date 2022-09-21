let Profesional = require("../models/profesional");
let Movie = require("../models/peliculas");

class moviesController {
    constructor() {}

    getPeliculas(req, res) { //:D
        if (req.query.id != null) {
            Movie.find({ titulo: req.query.id }).then(pro => {
                res.send(pro);
            }).catch(err => {
                console.log("Error al obtener la pelicula " + err);

            })
        } else {
            Movie.find().then(pro => {
                res.send(pro);
            }).catch(err => {
                console.log("Error al obtener la pelicula " + err);

            })
        }
    }

    getActores(req, res) { //:D
        Movie.find({ titulo: req.query.id }).then(pro => {
            res.send(pro[0].actores);
        }).catch(err => {
            console.log("Error al obtener la pelicula " + err);
        })
    }

    getDirectores(req, res) { //:D
        Movie.find({ titulo: req.query.id }).then(pro => {
            res.send(pro[0].director);
        }).catch(err => {
            console.log("Error al obtener la pelicula " + err);

        })
    }

    getGuionista(req, res) { //:D
        Movie.find({ titulo: req.query.id }).then(pro => {
            res.send(pro[0].guionista);
        }).catch(err => {
            console.log("Error al obtener la pelicula " + err);

        })
    }

    insertPelicula(req, res) {
        new Movie({
            titulo: req.body.titulo,
            anyo: req.body.anyo,
            pais: req.body.pais
        }).save().then(function(pro) {
            res.send(pro);
        }).catch(function(err) {
            console.log("Error al guardar la pelicula " + err);

        });
    }

    insertActor(req, res) {
        Profesional.find({ nombre: req.body.nombre }).then(pro => { // 
            Movie.updateOne({
                titulo: req.body.titulo
            }, {
                $push: { actores: { nombre: req.body.nombre } }
            }).then(function(pro) {
                res.send(pro);
            }).catch(function(err) {
                console.log("Error al guardar la pelicula " + err);

            });
        }).catch(err => {
            console.log("Error al obtener el profesional " + err);

        })
    }

    insertDirector(req, res) {
        Profesional.find({ nombre: req.body.nombre }).then(pro => {
            Movie.updateOne({
                titulo: req.body.titulo
            }, {
                $push: { director: { nombre: req.body.nombre } }
            }).then(function(pro) {
                res.send(pro);
            }).catch(function(err) {
                console.log("Error al guardar la pelicula " + err);

            });
        }).catch(err => {
            console.log("Error al obtener el profesional " + err);

        })
    }

    insertGuionista(req, res) {
        Profesional.find({ nombre: req.body.nombre }).then(pro => {
            Movie.updateOne({
                titulo: req.body.titulo
            }, {
                $push: { guionista: { nombre: req.body.nombre } }
            }).then(function(pro) {
                res.send(pro);
            }).catch(function(err) {
                console.log("Error al guardar la pelicula " + err);

            });
        }).catch(err => {
            console.log("Error al obtener el profesional " + err);

        })
    }

    updatePelicula(req, res) { // actualizar 
        Movie.updateOne({
            titulo: req.body.titulo
        }, {
            anyo: req.body.anyo,
            pais: req.body.pais
        }).then(function(pro) {
            res.send(pro);
        }).catch(function(err) {
            console.log("Error al guardar la pelicula " + err);

        });
    }

    deletePelicula(req, res) {
        Movie.deleteOne({
            titulo: req.body.titulo
        }).then(function() {
            res.send({ status: "ok", message: "deleted" });
        }).catch(function(err) {
            console.log("Error al eliminar la pelicula " + err);

        });
    }

    deleteActor(req, res) { // busca lapelilicula con el titulo y cuando lo tiees eliminas el actor 
        Movie.updateOne({
            titulo: req.body.titulo
        }, {
            $pull: { actores: { nombre: req.body.nombre } }
        }).then(function(pro) {
            res.send({ status: "ok", message: "deleted" });
        }).catch(function(err) {
            console.log("Error al guardar la pelicula " + err);

        });
    }

    deleteDirector(req, res) {
        Movie.updateOne({
            titulo: req.body.titulo
        }, {
            $pull: { director: { nombre: req.body.nombre } }
        }).then(function(pro) {
            res.send({ status: "ok", message: "deleted" });
        }).catch(function(err) {
            console.log("Error al guardar la pelicula " + err);

        });
    }

    deleteGuionista(req, res) {
        Movie.updateOne({
            titulo: req.body.titulo
        }, {
            $pull: { guionista: { nombre: req.body.nombre } }
        }).then(function(pro) {
            res.send({ status: "ok", message: "deleted" });
        }).catch(function(err) {
            console.log("Error al guardar la pelicula " + err);

        });
    }
}

module.exports = moviesController;