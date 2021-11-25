const express = require('express');
const urlsEmojiController = require('../controllers/urls.emoji.controller');

const router = express.Router();

router.get('/:originalUrl', urlsEmojiController.changeOrignalUrlToConvertedEmojiUrl);

module.exports = router;
