const mongoose = require('mongoose');
const env = require('../config');

export default async () => {
  const connection = await mongoose.connect(env.DATABASE_URI, { useNewUrlParser: true });
  return connection.connection.db;
};
