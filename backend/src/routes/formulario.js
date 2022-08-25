const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const FormularioController = require('../controllers/FormularioController');

router.use(bodyParser.json());

router.post('/formulario', FormularioController.insert);

module.exports = router;