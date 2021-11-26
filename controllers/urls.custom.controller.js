const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOriginalUrlToCustomUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToCustomUrl');
  try {
    const {customUrl, customWord} = req.body;
    const convertedCustomURL = await service.getConvertedUrlOrNULL(customUrl, customWord)
    if (!convertedCustomURL) {
      return res.status(httpStatus.OK).send({
        message: 'url that already exists',
      });
    }
    if (convertedCustomURL == "Don't use some special characters, such as #%\?") {
      return res.status(httpStatus.OK).send({
        message: "Don't use some special characters, such as #%\?",
      });
    }
    res.status(httpStatus.OK).send({
      key: convertedCustomURL,
    })
  } catch (err) {
    console.error(err);
    next(err);
  }
};