const httpStatus = require('http-status');
const service = require('../services/urls.service');
const { joinProtocol, isValidUrl, isValidCustomWord } = require('../utils/validate');

exports.changeOriginalUrlToCustomUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToCustomUrl');
  try {
    let { originalUrl } = req.body;
    const { customWord } = req.body;
    originalUrl = joinProtocol(originalUrl);

    if (!isValidUrl(originalUrl)) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'Original url is invalid',
      });
    }
    if (!isValidCustomWord(customWord))
    {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'Custom word is invalid',
      });
    }

    const convertedCustomURL = await service.getConvertedUrlOrNULL(originalUrl, customWord);
    if (!convertedCustomURL) {
      return res.status(httpStatus.CONFLICT).send({
        message: 'Custom word already uesd',
      });
    }
    res.status(httpStatus.OK).send({
      key: convertedCustomURL,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
