const dotenv = require('dotenv');

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  databaseURL: process.env.DATABASE_URI || 'mongodb://localhost/url-shortener',
};
