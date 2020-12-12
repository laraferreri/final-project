const express = require("express");
const router = express.Router();

const sampleJSON = [
  {
    username: "laraferreri",
    work: "example",
    collaboration: "g",
  },
  {
    username: "artlover123",
    work: "yo",
    collaboration: "whatever",
  },
];

router.get("/", (req, res) => res.send(sampleJSON));

module.exports = router;
