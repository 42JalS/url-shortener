const httpStatus = require('http-status');
const service = require('../services/urls.service');
const { joinProtocol, isValidUrl } = require('../utils/validate');

exports.changeOriginalUrlToConvertedUrl = async (req, res, next) => {
  try {
    let { originalUrl } = req.body;
    originalUrl = joinProtocol(originalUrl);

    if (!isValidUrl(originalUrl)) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'Original url is invalid',
      });
    }

    const convertedUrl = await service.getConvertedUrlOrNULL(originalUrl);
    return res.status(httpStatus.OK).send({
      key: convertedUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.redirectConvertedUrlToOriginalUrl = async (req, res, next) => {
  try {
    const { convertedUrl } = req.params;
    const originalUrl = await service.getOriginalUrlOrNULL(convertedUrl);
    if (originalUrl) {
      return res.redirect(originalUrl);
    }
    return res.redirect('/');
  } catch (err) {
    console.error(err);
    next(err);
  }
};
