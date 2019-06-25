var model = require('./api/models/mensagemModel'),
  jwt = require('jwt-simple');
var segredo = 'seusegredodetoken';
module.exports = function(req, res, next) {
  var token =
    (req.body && req.body.access_token) ||
    (req.query && req.query.access_token) ||
    req.headers['x-access-token'];
  //1
  if (token) {
    try {
      var decoded = jwt.decode(token, segredo);
      console.log('decodando ' + decoded);
      //2
      if (decoded.exp <= Date.now()) {
        res.json(400, { errorMsg: 'Acesso Expirado, faça login novamente' });
      }
      //3
      model.findOne({ _id: decoded.iss }, function(err, user) {
        if (err)
          res
            .status(500)
            .json({ errorMsg: 'erro ao procurar usuario do token.' });
        req.user = user;
        console.log('achei usuario ' + req.user);
        return next();
      });
      //4
    } catch (err) {
      return res.status(401).json({ errorMsg: 'Erro: Seu token é inválido' });
    }
  } else {
    res.json(401, { errorMsg: 'Você não está logado!' });
  }
};
