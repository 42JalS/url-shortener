const Urls = require('../models/urls');
const bijective = require('../services/bijective');

exports.getUrlData =  async (intputUrl, hostname, SERVER_PORT) => {
  try {
    let doc = await Urls.findOne({ url: intputUrl });
    if (!doc) {
        doc = await Urls.create({ url: intputUrl });;
    }
    const data =
    {
      host: `${hostname}:${SERVER_PORT}`,
      key: bijective.encode(doc._id),
    };
    return data;
  } catch (err) {
    console.error(err);
  }

}

exports.getkeyData = (key) => {
  console.log(`get: /${key}`);
  const id = bijective.decode(key);
  console.log(`id: ${id}`);
  Urls.findById(id, (err, doc) => {
    if (err) return err;
    if (doc) return res.redirect(doc.url);
    res.redirect('/');
 });
}