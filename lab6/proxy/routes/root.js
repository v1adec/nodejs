const express = require('express');
const { getRoot } = require('../clients/api');
const { fetchLastRecords } = require('../services/database/database.service');

const router = express.Router();

router.get('/', async (req, res) => {
    res.send(await getRoot() + " , api containeer. It's proxy 3001.");
});

router.get('/log-records', async (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(await fetchLastRecords(5), undefined, 4));
});

module.exports = router;
