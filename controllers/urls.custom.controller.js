const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOriginalUrlToCustomUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToCustomUrl');
  try {
    await service.getConvertedUrl(req.body.customUrl, req.body.customWord);
    res.status(httpStatus.OK).send({
      key: req.body.customWord,      
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};