const mysql = require('mysql2');

const required = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
const missing = required.filter(k => !process.env[k] || process.env[k].trim() === '');
if (missing.length) {
  console.error(`Missing required DB env vars: ${missing.join(', ')}`);
  process.exit(1);
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3307,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.query('SELECT 1 AS ok', (err, rows) => {
  if (err) {
    console.error('MySQL connection failed:', err.message);
  } else {
    console.log('MySQL connected.');
  }
});

module.exports = pool;
