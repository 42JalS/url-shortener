const httpStatus = require('http-status');
const service = require('../services/title.urls.service');

exports.changeOrignalUrlToTitleConvertedUrl = async (req, res, next) => {
  console.log('changeOrignalUrlToConvertedUrl');
  try {
    const { orignalUrl } = req.params;
    const convertedUrl = await service.getTitleConvertedUrl(orignalUrl);
    res.status(httpStatus.OK).send({
      key: convertedUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};