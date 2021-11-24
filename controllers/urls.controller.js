const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOriginalUrlToConvertedUrl = async (req, res, next) => {
  try {
    const { originalUrl } = req.params;
    const convertedUrl = await service.getConvertedUrl(originalUrl);
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
    const originalUrl = await service.getOriginalUrl(convertedUrl);
    if (originalUrl) {
      return res.redirect(originalUrl);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
