'use strict'

const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

//Load routes files


//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS


//Routes

app.get('/', cors(), (req, res) =>
    res.status(200).send(
        "<h1>Homepage</h1>"
    )
);

//Routes with controller

var project_routes = require('./routes/project');
app.use('/api', project_routes);

//exports
module.exports = app;