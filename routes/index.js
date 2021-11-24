const express = require('express');
const path = require('path');
const urlsRouter = require('./urls.route');
const titleUrlRouter = require('./title.urls.route');

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
router.use('/title-url', titleUrlRouter);

// TEST
router.use('/test', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/test.html'));
});
router.use('/ogtest', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/ogtest.html'));
});
router.use('/images/ogtest.png', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/images/ogtest.png'));
});

router.get('/:convertedUrl', urlsController.redirectConvertedUrlToOriginalUrl);

module.exports = router;
