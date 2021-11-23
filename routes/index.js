const express = require('express');
const urlsRouter = require('./urls.route');
const controller = require('../controllers/urls.controller');

const router = express.Router();
const urlsController = require('../controllers/urls.controller');

/**
 * GET /status : API Status
 */

router.get('/api/status', (req, res) => {
  res.json({
    message: 'OK',
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

router.use('/url', urlsRouter);

router.get('/:convertedUrl', urlsController.redirectConvertedUrlToOrignalUrl);

router.get('/original-url/:shortUrl', controller.changeShortUrlToOriginUrl);

module.exports = router;
