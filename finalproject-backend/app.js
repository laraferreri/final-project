// backend application for final project
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

var firebaseConfig = {
  apiKey: "AIzaSyCDPNV-D21vX6kiMG08eECS6WhD8qXXgYs",
  authDomain: "final-pro-cd829.firebaseapp.com",
  projectId: "final-pro-cd829",
  storageBucket: "final-pro-cd829.appspot.com",
  messagingSenderId: "886572613307",
  appId: "1:886572613307:web:64cfeb9d854b7cc6d8b39e",
};

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const createProfile = require("./routes/createProfile.js");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", indexRoute);
app.use("/create", createProfile);

app.listen(port, () => console.log(`Backend is running at port:${port}`));
