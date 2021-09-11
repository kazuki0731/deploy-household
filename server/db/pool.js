const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  database: "household",
  user: "kawabata",
  host: "localhost",
  password: "XLwdAX2m",
  port: 5432,
});

module.exports = pool;
