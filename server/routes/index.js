var express = require("express");
var router = express.Router();
const pool = require("../db/pool.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("OK");
});






module.exports = router;
