const mysql = require('mysql2/promise');

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root123",
}).then(connection => {
    Promise.all([
        connection.query(`CREATE DATABASE IF NOT EXISTS main_db;`),
        connection.query(`CREATE DATABASE IF NOT EXISTS test_main_db;`)
    ]).then((res) => {
        console.info("Databases created or successfully checked");
        process.exit(0);
    })
})