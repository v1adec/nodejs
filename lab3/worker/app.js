const { exec } = require('child_process');
const { Readable } = require('stream');
const fs=require("fs");
const dir=exec('dir  | findstr .js$',function (error,stdout,stderr) {
if(error){
    console.log(error.stack);
    console.log('Error code: '+error.code);
    console.log('Signal received: '+error.signal);
}
    Readable.from(stdout).pipe(process.stdout);
});


