'use strict';
module.exports = function(app) {
  var empresaController = require('../controllers/empresaController');

  app.route('/empresa').post(empresaController.create);
  app.route('/empresa').get(empresaController.findAll);
  app
    .route('/empresa/:id')
    .get(empresaController.findById)
    .put(empresaController.updateById)
    .delete(empresaController.deleteById);
  app
    .route('/empresa/cliente/:_idUsuario')
    .get(empresaController.findByClienteId);
};
