const axios = require('axios');
const config = require('../config.js');
//const config = require('../../config');


const makeHttpGetRequest = (url) => {
     return axios.get(config.get('api_url') + url);
};

module.exports = {
    makeHttpGetRequest: makeHttpGetRequest
};