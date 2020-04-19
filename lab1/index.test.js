const app=require('./index');
const supertest=require('supertest');
const request=supertest(app);
it('test hello world respons',async done=>{
    const response=await  request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
    done();
});