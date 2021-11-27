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

exports.getConvertedEmojiUrlOrNULL = async (originalUrl) => {
  console.log(`👀 Convert! ${originalUrl} -> seq emoji`);
  try {
    const convertedUrl = await makeConvertedEmojiUrl();
    const sameDoc = await Urls.findOne({ originalUrl });
    if (sameDoc) {
      return sameDoc.convertedUrl;
    }
    const newDoc = await saveNewUrl(originalUrl, convertedUrl);
    return newDoc.convertedUrl;
  } catch (err) {
    console.error(err);
  }
};
