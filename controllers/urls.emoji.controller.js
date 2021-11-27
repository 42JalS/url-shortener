const httpStatus = require('http-status');
const service = require('../services/urls.emoji.service');
const { joinProtocol, isValidUrl } = require('../utils/validate');

exports.changeOriginalUrlToConvertedEmojiUrl = async (req, res, next) => {
  console.log('changeOrignalUrlToConvertedEmojiUrl');
  try {
    let { originalUrl } = req.body;
    originalUrl = joinProtocol(originalUrl);

    if (!isValidUrl(originalUrl))
    {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'Original url is invalid',
      });
    }

    const convertedEmojiUrl = await service.getConvertedEmojiUrlOrNULL(originalUrl);
    if (!convertedEmojiUrl) {
      return res.status(httpStatus.serverError).send({
        message: 'Failed to save database.',
      });
    }
    res.status(httpStatus.OK).send({
      key: convertedEmojiUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
