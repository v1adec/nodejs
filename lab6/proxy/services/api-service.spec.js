const nock = require('nock');

const { makeHttpGetRequest } = require('./api-service');
 
nock('http://api.address.com')
  .get('/')
  .reply(200, 'Hello world!');

describe("Serving server ", () => {
    it('Should return proper content', async () => {
        const res = await makeHttpGetRequest('/');
        expect(res).toEqual('Hello world!');
      })
});
  