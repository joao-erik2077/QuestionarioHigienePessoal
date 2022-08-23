const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const formularioRouter = require('./routes/formulario');

app.use(formularioRouter);
app.use(cors());
app.use(morgan);
app.use(bodyParser.json());

module.exports = app;