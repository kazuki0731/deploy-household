var express = require("express");
var router = express.Router();
const pool = require("../db/pool.js");

const limit = 3;

const getData = (column, month) => {
  return `SELECT ${column}  FROM consumptions WHERE date_trunc('month', date) = DATE '2021-${month}-01'`;
};

const deleteData = (id) => {
  return `DELETE FROM consumptions WHERE id = ${id}`;
};

const query = async (column, month, category) => {
  const result = await pool
    .query(`${getData(column, month)} AND category = '${category}'`)
    .catch((e) => console.log(e));
  return result;
};

router.get("/:month", async (req, res) => {
  const month = ("0" + req.params.month).slice(-2);

  const result = await Promise.all([
    pool.query(getData("SUM(money)", month)),
    query("SUM(money)", month, "食費"),
    query("SUM(money)", month, "日用品"),
    query("SUM(money)", month, "交通費"),
    pool.query(getData("COUNT(*)", month)),
  ]).catch((e) => console.log(e));

  const data = {
    all: result[0].rows[0].sum || 0,
    food: result[1].rows[0].sum || 0,
    daily: result[2].rows[0].sum || 0,
    traffic: result[3].rows[0].sum || 0,
    pageLength: Math.ceil(result[4].rows[0].count / limit),
  };
  res.send(data);
});

router.get("/detail/:month/:page", async (req, res) => {
  const page = req.params.page;
  const offset = (page - 1) * limit;
  const month = ("0" + req.params.month).slice(-2);

  const result = await pool
    .query(
      `${getData("*", month)} ORDER BY date ASC LIMIT ${limit} OFFSET ${offset}`
    )
    .catch((e) => console.log(e));
  res.send(result.rows);
});

router.delete("/detail", async (req, res) => {
  await pool.query(deleteData(req.body.id)).catch((e) => console.log(e));
  res.send("OK");
});

module.exports = router;
