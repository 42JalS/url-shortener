const httpStatus = require('http-status');
const service = require('../services/urls.service');
const { isValidUrl } = require('../utils/validate');

exports.changeConvertedUrlToOriginalUrl = async (req, res, next) => {
    console.log('changeConvertedUrlToOriginalUrl');
    try {
      const fullConvertedUrl = req.params.convertedUrl;
      if (!isValidUrl(fullConvertedUrl)) {
        return res.status(httpStatus.BAD_REQUEST).send({
          message: 'Converted url is invalid',
        });
      }
      const convertedUrl = fullConvertedUrl.substring(fullConvertedUrl.lastIndexOf('/') + 1);
      const originalUrl = await service.getOriginalUrl(convertedUrl);
      if (!originalUrl) {
        return res.status(httpStatus.BAD_REQUEST).send({
          message: 'This is not a converted url'
        });
      }
      res.status(httpStatus.OK).send({
        key: originalUrl,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
};
