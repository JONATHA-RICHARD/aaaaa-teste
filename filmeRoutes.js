const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

router.get('/filme', filmeController.listarFilmes);
router.get('/filme/:id', filmeController.buscarFilmePorId);
router.get('/filtro/filme', filmeController.filtrarFilmes);

module.exports = router;
