const Urls = require('../models/urls');

exports.getCustomUrl = async (originalURL, convertedURL) => {
  console.log(originalURL);
  try {
    // const doc = await Urls.findOne({ $or: [{originalURL: originalURL },{convertedURL: customUrl}] });
    const doc = await Urls.findOne({ originalURL: originalURL });
    if (doc) {
      return convertedURL;
    }
    const newUrl = await Urls.create({ originalURL: originalURL }, {convertedURL: customUrl});
    console.log('newUrl', newUrl);
    return customUrl;
  } catch (err) {
    console.error(err);
  }
};