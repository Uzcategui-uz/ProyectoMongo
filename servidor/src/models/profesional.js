const mongoose = require("mongoose");

const profesionalSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacionalidad: String,
    profesion: String
});

module.exports = mongoose.model("Profesional", profesionalSchema)