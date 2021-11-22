
const service = require('../services/db');

exports.longUrlController = async (req, res) => {
  const urlData = service.getUrlData(req.params.longUrl, req.hostname);
  return res.send(urlData);
}

exports.keyController = (req, res) => {
  
  
}