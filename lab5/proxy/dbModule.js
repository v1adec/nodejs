
const mysql=require("mysql2");

const connection=mysql.createConnection({
    host:"lab5_db_1",
    user:"root",
    port:"3306",
    database:"dblab",
    password:"test123"
});

connection.query(`CREATE TABLE IF NOT EXISTS t(id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,create_db TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,path VARCHAR(30) NOT NULL,ua VARCHAR(30) NOT NULL);`,function (err,result) {
if(err)console.log(err);
else console.log("Table was created");
});


module.exports.insertOne=function(c,p,u){
    connection.query(`INSERT INTO t(create_db,path,ua) VALUES ('2020-03-22','${p}','${u}') `,function (err,result) {
    if(err)console.log(err)
    console.log(result);
    });

};
module.exports.conn=connection;




