const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
    titulo: String,
    anyo: Number,
    pais: String,
    actores: [{ nombre: String }],
    guionista: [{ nombre: String }],
    director: [{ nombre: String }]
})



module.exports = mongoose.model("Movie", movieSchema)