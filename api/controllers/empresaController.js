'use strict';

var mongoose = require('mongoose'),
  Empresa = mongoose.model('Empresa');

exports.create = async (req, res) => {
  var usuario = new Empresa(req.body);
  let haveEmpresa = await Empresa.findOne({ cnpj: req.body.cnpj });
  let haveEmpresaCliente = await Empresa.findOne({
    _idUsuario: req.body._idUsuario
  });
  if (haveEmpresaCliente) {
    return res
      .status(400)
      .json({ errorMsg: 'Você já possui uma empresa cadastrada' });
  }
  if (haveEmpresa) {
    return res.status(400).json({ errorMsg: 'Empresa já existe' });
  }
  usuario.save((err, empresaSave) => {
    if (err) res.send(err);
    return res.status(201).json(empresaSave);
  });
};

exports.findById = (req, res) => {
  Empresa.findById(req.params.id, (err, empresa) => {
    if (err) res.send(err);
    res.json(empresa);
  });
};

exports.findByClienteId = async (req, res) => {
  const empresa = await Empresa.find({ _idUsuario: req.params._idUsuario });
  if (!empresa) {
    return res
      .status(400)
      .json({ errorMsg: 'Empresa para usuario não encontrado' });
  }
  res.json(empresa);
};

exports.updateById = (req, res) => {
  Empresa.findOneAndUpdate({ _id: req.params.id }, req.body, (err, empresa) => {
    if (err) res.send(err);
    res.json(empresa);
  });
};

exports.findAll = (req, res) => {
  Empresa.find({}, (err, empresa) => {
    if (err) res.send(err);
    res.json(empresa);
  });
};

exports.deleteById = (req, res) => {
  req.body.ativo = false;
  Empresa.findOneAndUpdate({ _id: req.params.id }, req.body, (err, empresa) => {
    if (!empresa) {
      return res.status(400).json({ errorMsg: 'Empresa não encontrada' });
    }
    if (err) res.send(err);
    res.json(empresa);
  });
};
