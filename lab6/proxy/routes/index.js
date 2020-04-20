const express = require('express');
const router = express.Router();
const { addLogRecord } = require('../services/database/database.service');

router.use(async (req, res, next) => {
    addLogRecord(req.url, req.get('User-Agent'), new Date().toJSON().slice(0, 19).replace('T', ' ')).then(() => next());
});

router.use('/', require('./root'))

module.exports = router;
