const httpStatus = require('http-status');
const service = require('../services/urls.emoji.service');

exports.changeOrignalUrlToConvertedEmojiUrl = async (req, res, next) => {
  console.log('changeOrignalUrlToConvertedEmojiUrl');
  try {
<<<<<<< HEAD
    const { originalUrl } = req.params;
    const convertedEmojiUrl = await service.getConvertedEmojiUrlOrNULL(originalUrl);
=======
    const { emojiUrl } = req.body;
    const convertedEmojiUrl = await service.getConvertedEmojiUrl(emojiUrl);
>>>>>>> 6d8e8fb (♻️REFACTOR: change method to post)
    res.status(httpStatus.OK).send({
      key: convertedEmojiUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
