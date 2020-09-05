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
app.post('/creator'), cors(), (req, res) => {
    console.log(req.body.name);
    console.log(req);
}

app.get('/creator', cors(), (req, res) =>
    res.status(200).send({
        messague: 'maciel galeano, finalstory2'
    })
);


//exports
module.exports = app;