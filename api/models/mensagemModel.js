'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MensagemSchema = new Schema({
  nome: {
    type: String,
    required: 'nome obrigatório'
  },
  email: {
    type: String,
    required: 'email obrigatório'
  },
  telefone: {
    type: String
  },
  assunto: {
    type: String,
    required: 'assunto obrigatório'
  },
  mensagem: {
    type: String,
    required: 'assunto obrigatório'
  },
  data_cadastro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Mensagem', MensagemSchema);
