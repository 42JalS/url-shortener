const bijective = require('../services/bijective');
const Urls = require('../models/urls');

/// ////////
app.get('/url/:longUrl', async (req, res) => {
  console.log(`get: /url/${req.params.longUrl}`);

  try {
    const doc = await Urls.findOne({ url: req.params.longUrl });
    if (doc) {
      res.send({
        host: `${req.hostname}:${SERVER_PORT}`,
        key: bijective.encode(doc._id),
      });
    } else {
      const newUrl = await Urls.create({ url: req.params.longUrl });
      res.send({
        host: `${req.hostname}:${SERVER_PORT}`,
        key: bijective.encode(newUrl._id),
      });
    }
  } catch (err) {
    console.error(err);
  }
});

app.get('/:key', (req, res) => {
  console.log(`get: /${req.params.key}`);
  const id = bijective.decode(req.params.key);
  console.log(`id: ${id}`);
  Urls.findById(id, (err, doc) => {
    if (err) return res.send(err);
    if (doc) return res.redirect(doc.url);
    res.redirect('/');
  });
});
/// ////////
