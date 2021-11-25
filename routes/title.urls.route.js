const express = require('express');
const controller = require('../controllers/title.urls.controller');

const router = express.Router();

router.get('/:originalUrl', controller.changeOriginalUrlToTitleConvertedUrl);
module.exports = router;
