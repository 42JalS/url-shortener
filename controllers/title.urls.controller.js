const httpStatus = require('http-status');
const service = require('../services/title.urls.service');

exports.changeOriginalUrlToTitleConvertedUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToTitleConvertedUrl');
  try {
    const { titleUrl } = req.body;
    if (!titleUrl) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'No original url provided',
      });
    }

    const convertedUrl = await service.getTitleConvertedUrlOrNULL(titleUrl);
    if (convertedUrl === null) {
      return res.status(httpStatus.serverError).send({
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
