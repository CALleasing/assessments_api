const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "13.76.231.248",
    user: "adminkdcgroup",
    password: "Aa1212312121@@##",
    database: 'cal2009',
    port: 3306
});

module.exports = pool;