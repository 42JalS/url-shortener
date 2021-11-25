const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOriginalUrlToCustomUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToCustomUrl');
  try {
    const convertedCustomURL = await service.getConvertedUrl(req.body.customUrl, req.body.customWord);
    res.status(httpStatus.OK).send({
      key: convertedCustomURL,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};