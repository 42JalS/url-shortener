const Urls = require('../models/urls');
const Sequences = require('../models/sequences');
const bijective = require('../utils/bijective');

const getNextUrlCount = async () => {
  const sequence = await Sequences.findOne({ _id: 'url_count' });
  if (sequence) {
    return bijective.encode(sequence.seq);
  }
  return 'a'; // first url
};

const saveNewUrl = async (originalUrl, convertedUrl) => {
  const newDoc = new Urls({
    originalUrl,
    convertedUrl,
  });
  console.log('🥳 Save New URL: ', newDoc);
  await newDoc.save();
  return newDoc;
};

exports.getConvertedUrlOrNULL = async (originalUrl, customWord = null) => {
  console.log(`👀 Convert! ${originalUrl} -> ${customWord == null ? '"seq count"' : customWord}`);
  try {
    const convertedUrl = customWord || await getNextUrlCount();
    const docSame = await Urls.findOne({ originalUrl, convertedUrl });
    if (docSame) {
      return docSame.convertedUrl;
    }
    const docSameConvertedUrl = await Urls.findOne({ convertedUrl });
    if (docSameConvertedUrl) {
      return null;
    }
    const newDoc = await saveNewUrl(originalUrl, convertedUrl);
    return newDoc.convertedUrl;
  } catch (err) {
    console.error(err);
  }
};

exports.getOriginalUrlOrNULL = async convertedUrl => {
  try {
    const doc = await Urls.findOne({ convertedUrl });
    if (doc) {
      return doc.originalUrl;
    }
    return null;
  } catch (err) {
    console.error(err);
  }
};
