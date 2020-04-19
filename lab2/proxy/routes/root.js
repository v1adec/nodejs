const express = require('express');
const { getRoot } = require('../clients/api');
//const { makeHttpGetRequest } = require('../services/api-service');

const router = express.Router();

router.get('/', (req, res) => {
    makeHttpGetRequest('/').then(val => res.send(val.data));
});

module.exports = router;
