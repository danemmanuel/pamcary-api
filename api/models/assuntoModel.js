'use strict';

var mongoose = require('mongoose');

var AssuntoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: 'Titulo é Obrigatório'
  },
  data_cadastro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Assunto', AssuntoSchema);
