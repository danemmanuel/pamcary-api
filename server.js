var express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Produto = require('./api/models/mensagemModel'),
  Empresa = require('./api/models/assuntoModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://danvieira:dan2335132@ds018258.mlab.com:18258/dnodestr',
  {
    useMongoClient: true
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var mensagemRoutes = require('./api/routes/mensagemRoutes');
var assuntoRoutes = require('./api/routes/assuntoRoutes');

mensagemRoutes(app);
assuntoRoutes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port);
