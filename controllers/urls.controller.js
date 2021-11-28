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

    const data = await service.getConvertedUrlOrNULL(originalUrl);
    if (!data) {
      return res.status(httpStatus.serverError).send({
        message: 'Failed to save database.',
      });
    }
    return res.status(httpStatus.OK).send({
      message: 'ok',
      status: httpStatus.OK,
      data
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.redirectConvertedUrlToOriginalUrl = async (req, res, next) => {
  try {
    const { convertedUrl } = req.params;
    const data = await service.getOriginalUrlOrNULL(convertedUrl);
    if (!data) {
      return res.redirect('/');
    }
    return res.redirect(data.originalUrl);
  } catch (err) {
    console.error(err);
    next(err);
    return null;
  }
};
