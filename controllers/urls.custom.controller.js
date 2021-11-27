const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOriginalUrlToCustomUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToCustomUrl');
  try {
    const { customUrl, customWord } = req.body;
    if (!customUrl) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'No original url provided',
      });
    }
    if (!customWord) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'No custom word for shorten url provided',
      });
    }

    const convertedCustomURL = await service.getConvertedUrlOrNULL(customUrl, customWord);
    if (!convertedCustomURL) {
      return res.status(httpStatus.serverError).send({
        message: 'Failed to save database.',
      });
    }
    res.status(httpStatus.OK).send({
      key: convertedCustomURL,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
