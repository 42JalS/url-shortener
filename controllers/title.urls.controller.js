const httpStatus = require('http-status');
const service = require('../services/title.urls.service');

exports.changeOriginalUrlToTitleConvertedUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToTitleConvertedUrl');
  try {
    const { originalUrl } = req.params;
    console.log(originalUrl);

    const convertedUrl = await service.getTitleConvertedUrlOrNULL(originalUrl);
    console.log(convertedUrl);
    if(convertedUrl === null){
        return res.status(httpStatus.BAD_REQUEST).send({
          message: 'Reject get title-url some reason',
      });
    }
    return res.status(httpStatus.OK).send({
      key: convertedUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};