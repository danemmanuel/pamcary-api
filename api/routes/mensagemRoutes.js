'use strict';
module.exports = function(app) {
  var mensagem = require('../controllers/mensagemController');
  var valida = require('../../validarJWT');

  app
    .route('/mensagem')
    .post(mensagem.create)
    .get(mensagem.findAll);

  app
    .route('/mensagem/:taskId')
    .get(mensagem.findById)
    .put(mensagem.updateById)
    .delete(mensagem.deleteById);
};
