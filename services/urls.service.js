const Urls = require('../models/urls');
const Sequences = require('../models/sequences');

const getNextUrlCount = async () => {
  const sequence = await Sequences.findOneAndUpdate(
    { _id: 'url_count' },
    { $inc: { seq: 1 } },
    { upsert: true, new: true },
  );
  return sequence.seq;
};

const saveNewUrl = async (originalUrl, customWord) => {
  const convertedUrl = customWord || getNextUrlCount();
  const newUrl = new Urls({
    originalUrl,
    convertedUrl,
  });
  console.log('🥳newUrl: ', newUrl);
  await newUrl.save();
};

exports.getConverted = async (originalUrl, customWord) => {
  console.log(originalUrl, '->', customWord);
  try {
    const doc = await Urls.findOne({ originalUrl });
    if (doc) {
      return doc.convertedUrl;
    }
    const newDoc = await saveNewUrl(originalUrl, customWord);
    return newDoc.convertedUrl;
  } catch (err) {
    console.error(err);
  }
};

exports.getOriginalUrl = async convertedUrl => {
  try {
    const doc = await Urls.findOne({ convertedUrl });
    if (doc) {
      return doc.url;
    }
    return '/';
  } catch (err) {
    console.error(err);
  }
};
