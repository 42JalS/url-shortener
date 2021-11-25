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

exports.getConvertedEmojiUrlOrNULL = async (originalUrl, customWord = null) => {
  console.log(`👀 Convert! ${originalUrl} -> ${customWord == null ? '"seq emoji"' : customWord}`);
  try {
    const convertedUrl = customWord || await makeConvertedEmojiUrl();
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
