const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const artists = db.collection("artists");

router.get("/artists/:id", (req, res) => {
  const artistArray = [];
  const queryId = req.params.id;

  artists
    .where("artistUserName", "==", queryId)
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
