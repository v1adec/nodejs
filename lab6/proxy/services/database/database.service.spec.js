const { factory } = require('./stub-models');
const db = require("./models");
const { fetchLastRecords } = require('./database.service');

describe("Test database service", () => {
    let logRequests = [];
    logRequests
    beforeAll(() => Promise.all([
        db.sequelize.sync({ force: false }),
        db.LogRequests.destroy({ where: {}, truncate: true }),
        (async () => await db.LogRequests.bulkCreate(logRequests = await factory.buildMany('LogRequests', 25)))()
    ]));

    it('Preparation::Should be prepared 25 instances', async () => {
        logRequests = await db.LogRequests.findAll();
        expect(logRequests.length).toEqual(25);
    });
    it('Should be fetched last 5 records', async () => {
        expect(await fetchLastRecords(5)).toEqual(logRequests.slice(-5).reverse());
    });
});
