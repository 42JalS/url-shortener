const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOriginalUrlToConvertedUrl = async (req, res, next) => {
  try {
    const { basicUrl } = req.body;
        const { originalUrl } = req.params;
    if (!originalUrl) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'No original url provided',
      });
    }
    const convertedUrl = await service.getConvertedUrl(basicUrl);
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
    return res.redirect('/');
  } catch (err) {
    console.error(err);
    next(err);
  }
};
