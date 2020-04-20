const { makeHttpGetRequest } = require('../services/api-service');

module.exports = {
    getRoot:  () => makeHttpGetRequest('/')
};