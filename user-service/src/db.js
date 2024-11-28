const mysql = require('mysql2');

// Konfigurasi koneksi ke MySQL
const pool = mysql.createPool({
  host: 'localhost',        // Ganti dengan host MySQL Anda
  user: 'root',             // Username MySQL
  password: '1',             // Password MySQL
  database: 'user_service', // Nama database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Membuat koneksi pool
const db = pool.promise();

// Ekspor koneksi untuk digunakan di tempat lain
module.exports = db;
