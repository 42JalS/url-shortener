const express = require('express');
const morgan = require('morgan');

module.exports = async app => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(express.static('public'));
  app.use(morgan('dev'));

  return app;
};
