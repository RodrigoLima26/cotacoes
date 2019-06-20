const express = require('express');
const path = require('path');

const router = new express.Router();

const user_controller = require('../controllers/usersController.js');

router.get('/user/get', 		user_controller.get);
router.post('/user/save',       user_controller.save);

module.exports = router;