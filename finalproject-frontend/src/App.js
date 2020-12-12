import "./App.css";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "friebase/app";
import "firebase/auth";
import CreateAccount from "../containers/CreateAccount";
import Home from "./containers/Home";
import Login from "./containers/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userAuthInfo, setUserAuthInfo] = useState({});

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "final-pro-cd829.firebaseapp.com",
    projectId: "final-pro-cd829",
    storageBucket: "final-pro-cd829.appspot.com",
    messagingSenderId: "886572613307",
    appId: "1:886572613307:web:64cfeb9d854b7cc6d8b39e",
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (response) {
      console.log("LOGIN RESPONSE", response);
      setLoggedIn(true);
    })
    .catch(function (error) {
      console.log("LOGIN ERROR", error);
    });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedIn(true);
        setUserAuthInfo(user);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/CreateAccount">
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <Home userAuthInfo={userAuthInfo} />
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
