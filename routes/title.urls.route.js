const express = require('express');
const controller = require('../controllers/title.urls.controller');

const router = express.Router();

router.get('/:orignalUrl', controller.changeOrignalUrlToTitleConvertedUrl);
module.exports = router;
