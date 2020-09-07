'use strict';

var controller = {
    home: function(req, res) {
        return res.status(200).send({
            messague: "Executed method home"
        });
    },
    text: function(req, res) {
        return res.status(200).send({
            messague: "Executed method text"
        });
    }
}

module.exports = controller;