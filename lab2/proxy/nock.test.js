const nock = require('nock')
const app = require('./server');
const { makeHttpGetRequest } = require('./services/api-service');
const scope = nock('http://apiurl.com')
        .get('/')
        .reply(200, 'Home world!')

describe("Serving server ", () => {
        it('Should return prper content', async () => {
                const res = await makeHttpGetRequest('/');
                expect(res.data).toEqual('Home world!');
        })
});
