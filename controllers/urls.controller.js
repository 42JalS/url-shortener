const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOriginalUrlToConvertedUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToConvertedUrl');
  try {
    const { originalUrl } = req.params;
    const convertedUrl = await service.getConvertedUrl(originalUrl);
    res.status(httpStatus.OK).send({
      key: convertedUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.redirectConvertedUrlToOriginalUrl = async (req, res, next) => {
  console.log(req);
  try {
    const { convertedUrl } = req.params;
    const originalUrl = await service.getOriginalUrl(convertedUrl);
    if (originalUrl) {
      console.log('originalUrl: ', originalUrl);
      res.redirect(originalUrl);
    }
    res.redirect('/');
  } catch (err) {
    console.error(err);
    next(err);
  }
};
