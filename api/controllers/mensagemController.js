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

exports.findById = (req, res) => {
  Mensagem.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.updateById = (req, res) => {
  Mensagem.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.deleteById = (req, res) => {
  req.body.ativo = false;
  Mensagem.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};
