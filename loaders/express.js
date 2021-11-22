const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('../routes');

const router = express.Router();
const urlsController = require('../controllers/urls.controller');

module.exports = async app => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(express.static('public'));
  app.use(morgan('dev'));

  app.use('/url', apiRoutes);
  router.get('/', urlsController.redirectShortUrlToLongUrl);

  return app;
};
