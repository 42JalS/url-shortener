const controller = require('./controller');

app.get('/url/:longUrl', controller.longUrlController);
app.get('/:key', controller.keyController);
