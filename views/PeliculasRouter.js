
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const PeliculasController = require('../controllers/PeliculasController');




//Registro de una peli nueva-CREATE
router.post('/registrarPelicula', auth, isAdmin, PeliculasController.registraPelicula); 
//http://localhost:3300/registrarPelicula

//Leer todas las peliculas-READ
router.get('/peliculas', PeliculasController.traePeliculas);
//http://localhost:3300/peliculas



module.exports = router;