const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeConvertedUrlToOriginalUrl = async (req, res, next) => {
    console.log('changeConvertedUrlToOriginalUrl');
    try {
      const fullConvertedUrl = req.params.convertedUrl;
      const convertedUrl = fullConvertedUrl.substring(fullConvertedUrl.lastIndexOf('/') + 1);
      const originalUrl = await service.getOriginalUrl(convertedUrl);
      res.status(httpStatus.OK).send({
        key: originalUrl,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
};