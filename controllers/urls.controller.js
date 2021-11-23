const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOrignalUrlToConvertedUrl = async (req, res, next) => {
  console.log('changeOrignalUrlToConvertedUrl');
  // console.log(req);
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

exports.redirectConvertedUrlToOrignalUrl = async (req, res, next) => {
  console.log(req);
  try {
    const { convertedUrl } = req.params;
    const orignalUrl = await service.getOrignalUrl(convertedUrl);
    if (orignalUrl) {
      console.log('orignalUrl: ', orignalUrl);
      res.redirect(orignalUrl);
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