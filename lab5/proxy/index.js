require('dotenv').config();
const dbMod=require('./dbModule');
const express = require("express");
const axios=require('axios');
const app = express();

app.get("/",function (request,response) {
axios.get(process.env.pathUrl).then(function (resp) {
response.send(resp.data);
})
    .catch(error=>{
        console.log(error)
    });
});
app.get("/insertOne",function (request,response) {
dbMod.insertOne(Date.now(),'Hello','World');
response.send("ok");
});

app.get("/get5",function (request,response) {

    dbMod.conn.query("SELECT * FROM t",function (err,result) {
        if(err)console.log(err);
        response.send(result);
    });

});

app.listen(3001);
module.exports=app;