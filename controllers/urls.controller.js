const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeLongUrlToShortUrl = async (req, res, next) => {
  try {
    const { longUrl } = req.params;
    const shortUrl = await service.getShortUrl(longUrl);

    res.status(httpStatus.OK).send({
      key: shortUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.redirectShortUrlToLongUrl = async (req, res, next) => {
  try {
    const { key } = req.params;
    const longUrl = await service.getLongUrl(key);

    res.redirect(longUrl);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
