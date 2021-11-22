const express = require('express');

const controller = require('../controllers/urls.controller');

const router = express.Router();

router.get('/:longUrl', controller.changeLongUrlToShortUrl);
module.exports = router;
