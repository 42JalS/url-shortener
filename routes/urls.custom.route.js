const express = require('express');

const controller = require('../controllers/urls.custom.controller');

const router = express.Router();

router.get('', controller.changeUrlToCustomUrl);

module.exports = router;
