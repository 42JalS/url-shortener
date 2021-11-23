const mongoose = require('mongoose');

const { Schema } = mongoose;

const UrlsSchema = new Schema({
  original_url: {
    type: String,
    required: true,
  },
  converted_url: {
    type: String,
    required: true,
    index: true,
  },
  _opengraph_id: {
    type: Schema.Types.ObjectId,
    ref: 'opengraph',
  },
  created_at: {
    type: Date,
    required: true,
  },
});

// eslint-disable-next-line func-names
const preSaveUrlsSchema = function (next) {
  const doc = this;
  doc.created_at = new Date();
  next();
};

UrlsSchema.pre('save', preSaveUrlsSchema);

const urls = mongoose.model('urls', UrlsSchema);
module.exports = urls;
