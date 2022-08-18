const Pool = require("pg").Pool;
require('dotenv').config();
const user = process.env.DB_USERNAME || "postgres";
const password = process.env.DB_PASSWORD || "admin";
const database =  process.env.DB_NAME || "perntodo";
const host =  process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || 5432;

const pool = new Pool({
  user:     user,
  password: password,
  database: database,
  host: host,
  port: port,
  ssl: true
});
console.log(pool);
module.exports = pool;
