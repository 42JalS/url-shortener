const express = require('express');
const urlsRouter = require('./urls.route');

const router = express.Router();

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

module.exports = router;
