const express = require('express');

const controller = require('../controllers/urls.controller');

const router = express.Router();
router.route('/:longUrl').get(controller.changeLongUrlToShortUrl);
