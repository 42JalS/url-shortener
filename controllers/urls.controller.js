const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeLongUrlToShortUrl = async (req, res, next) => {
  console.log('changeLongUrlToShortUrl');
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
  // console.log(req);
  try {
    const { shortUrl } = req.params;
    console.log('short : ', shortUrl);
    const longUrl = await service.getLongUrl(shortUrl);
    if (longUrl) {
      console.log(longUrl);
      console.log('longUrl: ', longUrl);
      res.redirect(longUrl);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.changeShortUrlToOriginUrl = async (req, res, next) => {
  console.log('changeShortUrlToOriginUrl');
  try {
    const localUrl = req.params.shortUrl;
    const enId = localUrl.substring(localUrl.lastIndexOf('/') + 1);
    const originUrl = await service.getLongUrl(enId);
    if (originUrl === 'https://localhost:3000')
      console.log('aaaaa');
    res.status(httpStatus.OK).send({
      key: originUrl,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};