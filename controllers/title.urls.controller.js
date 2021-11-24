const httpStatus = require('http-status');
const service = require('../services/title.urls.service');

exports.changeOriginalUrlToTitleConvertedUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToTitleConvertedUrl');
  try {
    const { originalUrl } = req.params;
    console.log(originalUrl);

    const convertedUrl = await service.getTitleConvertedUrl(originalUrl);
    console.log(convertedUrl);
    res.status(httpStatus.OK).send({
      key: convertedUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};