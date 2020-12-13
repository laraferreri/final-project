const express = require("express");
const router = express.Router();

const firebase = require("firebase");
const db = firebase.firestore();
const blogposts = db.collection("artists");

router.get("/", (req, res) => {
  const queryParams = req.query;
  artists
    .doc()
    .set(queryParams)
    .then(function (doc) {
      res.send("Successful Submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
