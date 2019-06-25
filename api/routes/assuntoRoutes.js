'use strict';
module.exports = function(app) {
  var assuntoController = require('../controllers/assuntoController');

  app.route('/assunto').post(assuntoController.create);
  app.route('/assunto').get(assuntoController.findAll);
};
