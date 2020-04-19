const app = require('express')();
const { root_mesasge } = require('./config');
app.get('/',  (req, res) => {

  console.log('baseUrl', req);
  res.send(root_mesasge);
});

module.exports = app;
