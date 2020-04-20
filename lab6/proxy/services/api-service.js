const axios = require('axios');
const config = require('../../config.js');


const makeHttpGetRequest = async (url) => {
    let res = await axios.get(config.get('api_url') + url);
    return res.data;
};

module.exports = {
    makeHttpGetRequest: makeHttpGetRequest
};