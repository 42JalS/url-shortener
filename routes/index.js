const express = require('express');
const urlsRouter = require('./urls.route');
const urlsController = require('../controllers/urls.controller');

const router = express.Router();

/**
 * GET /status : API Status
 */

router.get('/status', (req, res) => {
  res.json({
    message: 'OK',
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

router.use('/url', urlsRouter);
router.use('/', urlsController.key);

module.exports = router;
