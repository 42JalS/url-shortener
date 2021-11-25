const Urls = require('../models/urls');
const Sequences = require('../models/sequences');
const bijectiveEmoji = require('../utils/bijective-emoji');

const makeConvertedEmojiUrl = async () => {
  const sequence = await Sequences.findOne({ _id: 'url_count' });
  if (sequence) {
    return bijectiveEmoji.encode(sequence.seq);
  }
  return '😀'; // first url
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

exports.getConvertedEmojiUrl = async (originalUrl, customWord = null) => {
  console.log(`👀 Convert! ${originalUrl} -> ${customWord == null ? '"seq emoji"' : customWord}`);
  try {
    const doc = await Urls.findOne({ originalUrl });
    if (doc) {
      return doc.convertedUrl;
    }
    const convertedUrl = customWord || await makeConvertedEmojiUrl();
    const newDoc = await saveNewUrl(originalUrl, convertedUrl);
    return newDoc.convertedUrl;
  } catch (err) {
    console.error(err);
  }
};
