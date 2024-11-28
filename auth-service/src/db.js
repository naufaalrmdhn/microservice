const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1',
  database: 'auth_service',
});

module.exports = pool;
