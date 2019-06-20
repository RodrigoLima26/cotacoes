const express = require('express');
const path = require('path');

const router = new express.Router();

const task_controller = require('../controllers/tasksController.js');

router.get('/task/get', 		task_controller.get);
router.post('/task/save',       task_controller.save);
router.get('/task/delete',      task_controller.remove);

module.exports = router;