const mongoose = require('mongoose');

const { Schema } = mongoose;

const UrlsSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    convertedUrl: {
      type: String,
      required: true,
      index: true,
    },
    _opengraphId: {
      type: Schema.Types.ObjectId,
      ref: 'opengraph',
    },
  },
  { timestamps: { createdAt: 'created_at' } }
);

// eslint-disable-next-line func-names
const preSaveUrlsSchema = function (next) {
  const doc = this;
  doc.created_at = new Date();
  next();
};

UrlsSchema.pre('save', preSaveUrlsSchema);

const urls = mongoose.model('urls', UrlsSchema);
module.exports = urls;
