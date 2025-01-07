require("dotenv").config()
const mysql = require("mysql")

const connectionDB = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT
})

connectionDB.connect((err: any) => {
    if (err) return console.error(err.message);

    console.log('Connected to the MySQL server.');
});

module.exports = connectionDB