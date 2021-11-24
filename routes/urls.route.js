const express = require('express');

const controller = require('../controllers/urls.controller');

const router = express.Router();

router.get('/:originalUrl', controller.changeOriginalUrlToConvertedUrl);
module.exports = router;
