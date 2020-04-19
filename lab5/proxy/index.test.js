const app=require('./index');
const supertest=require('supertest');
const request=supertest(app);
const nock=require('nock');

const scope=nock('http://localhost:3000')
    .get('/')
    .reply(200,{
        text:"Hello world"
    });

it('test hello world response',async done=>{
    const response=await  request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
    done();
});