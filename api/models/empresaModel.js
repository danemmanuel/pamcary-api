'use strict';

var mongoose = require('mongoose');

var EmpresaSchema = new mongoose.Schema({
  _idUsuario: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: 'Nome da empresa é Obrigatório'
  },
  cnpj: {
    type: String,
    required: 'CNPJ da empresa é Obrigatório',
    unique: true
  },
  endereco: {
    type: String,
    required: 'Endereço da empresa é Obrigatório'
  },
  ramoAtividade: {
    type: String,
    required: 'Ramo da atividade da empresa é Obrigatório'
  },
  cameraFria: {
    type: Boolean,
    required: true
  },
  transporte: {
    type: Boolean,
    required: true
  },
  mediaMensal: {
    type: Number,
    required: false
  },
  ativo: {
    type: Boolean,
    default: true
  },
  dataRegistro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Empresa', EmpresaSchema);
