'use strict';

var mongoose = require('mongoose'),
  Assunto = mongoose.model('Assunto');

exports.create = async (req, res) => {
  var new_assunto = new Assunto(req.body);
  new_assunto.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.findAll = (req, res) => {
  Assunto.find({}, (err, Assunto) => {
    if (err) res.send(err);
    res.json(Assunto);
  });
};
