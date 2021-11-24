const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeUrlToCustomUrl = async (req, res, next) => {
  console.log('changeUrlToCustomUrl');
  console.log(req);
  try {
    const { originalUrl } = req.params.originalURL;
    const { customUrl } = req.params.customUrl;
    await service.getCustomUrl(originalUrl, customUrl);
    res.status(httpStatus.OK).send({
      key: customUrl,      
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};