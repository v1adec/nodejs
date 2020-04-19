const { makeHttpGetRequest } =  require('../services/api-service');

module.exports = getRoot = () => {
    return makeHttpGetRequest('/');
};