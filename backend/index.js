'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var app = require('./app');
const port = 3700;

mongoose.connect('mongodb://localhost:27017', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('connection successfully');
        app.listen(port, () => console.log(`Backend working in port:3700`));
        //Execute creation of the servidor
    })
    .catch(err => console.log(err));