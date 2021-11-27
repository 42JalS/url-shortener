const httpStatus = require('http-status');
const service = require('../services/urls.emoji.service');

exports.changeOriginalUrlToConvertedEmojiUrl = async (req, res, next) => {
  try {
    const { emojiUrl } = req.body;
    if (!emojiUrl) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: 'No original url provided',
      });
    }

    const convertedEmojiUrl = await service.getConvertedEmojiUrlOrNULL(emojiUrl);
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
