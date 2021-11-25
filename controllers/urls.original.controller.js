const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeConvertedUrlToOriginalUrl = async (req, res, next) => {
    console.log('changeConvertedUrlToOriginalUrl');
    try {
      const fullConvertedUrl = req.params.convertedUrl;
      const convertedUrl = fullConvertedUrl.substring(fullConvertedUrl.lastIndexOf('/') + 1);
      const originalUrl = await service.getOriginalUrlOrNULL(convertedUrl);
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