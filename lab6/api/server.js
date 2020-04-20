const app = require('express')();
const { root_mesasge } = require('./config');
app.get('/',  (req, res) => {
  console.log("Request from: " + (req.headers['x-forwarded-for'] || req.connection.remoteAddress));
  res.send(root_mesasge);
});

module.exports = app;
