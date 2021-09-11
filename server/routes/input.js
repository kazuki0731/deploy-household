var express = require("express");
var router = express.Router();
const pool = require("../db/pool.js");

router.put("/", async (req, res) => {
  const money = req.body.money;
  const category = req.body.category;
  const memo = req.body.memo;
  const date = req.body.date;
  await pool
    .query(
      "INSERT INTO consumptions (money, category, memo, date) VALUES ($1, $2, $3, $4)",
      [money, category, memo, date]
    )
    .catch((e) => console.log(e));
  res.send("OK");
});

module.exports = router;
