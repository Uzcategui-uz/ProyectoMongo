const { Router } = require('express');
const profesionalController = require('../controllers/profesional.controller');
const moviesController = require('../controllers/peliculas.controller');
const router = Router();

let pController = new profesionalController();
let mController = new moviesController();

router.get("/profesionales", pController.getProfesionales);
router.post("/profesionales", pController.insertProfesionales);
router.put("/profesionales", pController.updateProfesionales);
router.delete("/profesionales", pController.deleteProfesionales);

router.get("/peliculas", mController.getPeliculas);
router.get("/peliculas/actor", mController.getActores);
router.get("/peliculas/director", mController.getDirectores);
router.get("/peliculas/guionista", mController.getGuionista);
router.post("/peliculas", mController.insertPelicula);
router.post("/peliculas/actor", mController.insertActor);
router.post("/peliculas/director", mController.insertDirector);
router.post("/peliculas/guionista", mController.insertGuionista);
router.put("/peliculas", mController.updatePelicula);
router.delete("/peliculas", mController.deletePelicula);
router.delete("/peliculas/actor", mController.deleteActor);
router.delete("/peliculas/director", mController.deleteDirector);
router.delete("/peliculas/guionista", mController.deleteGuionista);

module.exports = router;