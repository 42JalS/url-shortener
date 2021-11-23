const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeLongUrlToShortUrl = async (req, res, next) => {
  console.log('changeLongUrlToShortUrl');
  console.log(req);
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
  console.log(req);
  try {
    const { shortUrl } = req.params;
    const longUrl = await service.getLongUrl(shortUrl);
    if (longUrl) {
      console.log('longUrl: ', longUrl);
      res.redirect(longUrl);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
