const httpStatus = require('http-status');
const service = require('../services/urls.emoji.service');

exports.changeOrignalUrlToConvertedEmojiUrl = async (req, res, next) => {
  console.log('changeOrignalUrlToConvertedEmojiUrl');
  try {
    const { emojiUrl } = req.body;
    const convertedEmojiUrl = await service.getConvertedEmojiUrl(emojiUrl);
    res.status(httpStatus.OK).send({
      key: convertedEmojiUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
