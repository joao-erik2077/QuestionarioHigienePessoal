const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan);
app.use(bodyParser.json());

module.exports = app;