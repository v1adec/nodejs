const models = require('./models');


const addLogRecord = async (url_path, user_agent, date) => {
   return models.LogRequests.create({ date, url_path, user_agent });
};

const fetchLastRecords = async (limit = 5) => {
    return models.LogRequests.findAll({ limit, order: [['id', 'desc']]});
};

module.exports = {
    addLogRecord,
    fetchLastRecords
};
