const Urls = require('../models/urls');
const bijective = require('../utils/bijective');

exports.getConvertedUrl = async orignalUrl => {
  console.log(orignalUrl);
  try {
    const doc = await Urls.findOne({ url: orignalUrl });
    if (doc) {
      return bijective.encode(doc._id);
    }
    const newUrl = await Urls.create({ url: orignalUrl });
    console.log('newUrl', newUrl);
    return bijective.encode(newUrl._id);
  } catch (err) {
    console.error(err);
  }
};

exports.getOrignalUrl = async key => {
  try {
    const doc = await Urls.findOne({ _id: bijective.decode(key) });
    if (doc) {
      return doc.url;
    }
    return '/';
  } catch (err) {
    console.error(err);
  }
};
