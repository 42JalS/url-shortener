const express = require('express');

const controller = require('../controllers/urls.custom.controller');

const router = express.Router();

router.post('/', controller.changeOriginalUrlToCustomUrl);
// router.post('/', (req, res) => {
// 	console.log("aaaassss");
// } );

module.exports = router;
