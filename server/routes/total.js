var express = require("express");
var router = express.Router();
const pool = require("../db/pool.js");

const getData = (month) => {
  return `SELECT SUM(money)  FROM consumptions WHERE date_trunc('month', date) = TIMESTAMP '2021-0${month}-01 00:00:00+09'`;
};

const query = async (month, category) => {
  const result = await pool.query(
    `${getData(month)} AND category = '${category}'`
  );
  return result;
};

router.get("/:month", async (req, res) => {
  const month = req.params.month;

  const result = await Promise.all([
    pool.query(getData(month)),
    query(month, "food"),
    query(month, "daily"),
    query(month, "traffic"),
  ]).catch((e) => console.log(e));

  const data = {
    all: result[0].rows[0].sum || 0,
    food: result[1].rows[0].sum || 0,
    daily: result[2].rows[0].sum || 0,
    traffic: result[3].rows[0].sum || 0,
  };
  res.send(data);
});

module.exports = router;
