'use strict';

var mongoose = require('mongoose'),
  Mensagem = mongoose.model('Mensagem');

exports.findAll = (req, res) => {
  Mensagem.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create = (req, res) => {
  var new_task = new Mensagem(req.body);
  new_task.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.deleteById = (req, res) => {
  req.body.ativo = false;
  Mensagem.deleteOne({ _id: req.params.mensagemId }, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};
