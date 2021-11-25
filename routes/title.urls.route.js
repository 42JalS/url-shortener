const express = require('express');
const controller = require('../controllers/title.urls.controller');

const router = express.Router();

router.post('/', controller.changeOriginalUrlToTitleConvertedUrl);
module.exports = router;
