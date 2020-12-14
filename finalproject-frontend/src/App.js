import "./App.css";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import CreateAccount from "./containers/CreateAccount";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Header from "./components/Header";
import CreatePost from "./containers/CreatePost";
import UserProfile from "./containers/UserProfile";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "final-pro-cd829.firebaseapp.com",
  projectId: "final-pro-cd829",
  storageBucket: "final-pro-cd829.appspot.com",
  messagingSenderId: "886572613307",
  appId: "1:886572613307:web:64cfeb9d854b7cc6d8b39e",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userAuthInfo, setUserAuthInfo] = useState({});

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

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

  function LoginFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;
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
  }

  function LogoutFunction() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
      })
      .catch(function (error) {
        console.log("LOGOUT ERROR", error);
      });
  }

  function CreateAccountFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATED FOR:", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("ACCOUNT CREATION FAILED", error);
      });
  }

  if (loading) return null;

  return (
    <div className="App">
      <Header
        isLoggedIn={loggedIn}
        LogoutFunction={LogoutFunction}
        userAuthInfo={userAuthInfo}
      />
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
        <Route exact path="/create-post">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <CreatePost userAuthInfo={userAuthInfo} />
          )}
        </Route>
        <Route exact path="/profile/:id">
          {!loggedIn ? <Redirect to="/login" /> : <UserProfile />}
        </Route>
      </Router>
    </div>
  );
}

export default App;
