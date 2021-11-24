const express = require('express');
const urlsRouter = require('./urls.route');
const customRouter = require('./urls.custom.route');

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
router.use('/custom-url', customRouter);

router.get('/:convertedUrl', urlsController.redirectConvertedUrlToOrignalUrl);

module.exports = router;
