'use strict';

var express = require('express');
var ProyectController = require('../controllers/project');


var router = express.Router();

router.get('/home', ProyectController.home);
router.get('/text', ProyectController.home);
router.post('/text', ProyectController.text);
router.post('/home', ProyectController.text);

module.exports = router;