const { exec } = require('child_process');
const { Readable } = require('stream');
const fs=require("fs");
const worker=require("../worker/app");

setInterval(function () {
    var dir=exec('node ../worker/app.js',function (error,stdout,stderr) {

        let writableStream=fs.createWriteStream('test.txt',{flags:'a'});
        Readable.from(stdout).pipe(process.stdout);
        Readable.from(stdout).pipe(writableStream);
    });
    dir.on('exit',function (code) {
        console.log('Child process exited with exit code '+code);
    });
},60000);





