const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  root_mesasge: `Hello ${ process.env.NAME || 'world'}!`
};
