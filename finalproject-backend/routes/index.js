const express = require("express");
const router = express.Router();
const artists = db.collection("artists");

const firebase = require("firebase");
const db = firebase.firestore();

router.get("/all-artists", (req, res) => {
  const artistArray = [];
  artists
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        artistArray.push(doc.data());
      });
      return res.send(artistArray);
    })
    .catch(function (error) {
      console.log("Error", error);
      return res.send(error);
    });
});
module.exports = router;
