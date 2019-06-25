'use strict';
module.exports = function(app) {
  var mensagem = require('../controllers/mensagemController');
  var valida = require('../../validarJWT');

  app
    .route('/mensagem')
    .post(mensagem.create)
    .get(mensagem.findAll);

  app.route('/mensagem/:mensagemId').delete(mensagem.deleteById);
};
