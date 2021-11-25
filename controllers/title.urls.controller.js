const httpStatus = require('http-status');
const service = require('../services/title.urls.service');

exports.changeOriginalUrlToTitleConvertedUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToTitleConvertedUrl');
  try {
    const { titleUrl } = req.body;
    console.log(titleUrl);

    const convertedUrl = await service.getTitleConvertedUrl(titleUrl);
    console.log(convertedUrl);
    res.status(httpStatus.OK).send({
      key: convertedUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};