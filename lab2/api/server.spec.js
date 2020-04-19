const request = require('supertest')
const app = require('./server');


describe("Serving server ", () => {
    it('Should return hello world', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Hello world!');
      })
});
  