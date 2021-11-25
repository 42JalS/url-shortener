const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOriginalUrlToCustomUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToCustomUrl');
  try {
    const {customUrl, customWord} = req.body;
    const convertedCustomURL = await service.getConvertedUrlOrNULL(customUrl, customWord);
    res.status(httpStatus.OK).send({
      key: convertedCustomURL,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};