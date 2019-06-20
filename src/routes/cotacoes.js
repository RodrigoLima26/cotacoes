const express = require('express');
const path = require('path');

const router = new express.Router();

const cotacoes_controller = require('../controllers/cotacoesController.js');

router.get('/cotacoes', 		cotacoes_controller.index);
router.get('/cotacoes/find', 	cotacoes_controller.find);

module.exports = router;