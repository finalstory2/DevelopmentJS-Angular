'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: String,
    description: String,
    category: String,
    techs: [String],
    year: Number
});

module.exports = mongoose.model('Proyect', ProjectSchema);
//Proyects -> sabe the documents in the coleccion

//MVC
//Model vist controller