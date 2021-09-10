var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("OK");
});

router.get("/api", (req, res) => {
  res.send("Hell!");
});

module.exports = router;
