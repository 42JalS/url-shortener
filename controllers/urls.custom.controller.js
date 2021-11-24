const httpStatus = require('http-status');
const service = require('../services/urls.service');

exports.changeOriginalUrlToCustomUrl = async (req, res, next) => {
  console.log('changeOriginalUrlToCustomUrl');
  console.log(req);
  try {
    console.log("ajajajajaj");
    console.dir(req.body);
    const { customUrl } = req.body.customUrl;
    const { customWord } = req.body.customWord;
    console.log("customUrl", customUrl);
    console.log("customWord", customWord);
    await service.getConvertedUrl(customUrl, customWord);
    res.status(httpStatus.OK).send({
      key: customWord,      
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};