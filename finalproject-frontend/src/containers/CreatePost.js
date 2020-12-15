//Create Recipie page (45min)
import React from "react";
import axios from "axios";

function CreatePost({ userAuthInfo }) {
  console.log({ userAuthInfo });
  function submitPost(e) {
    e.preventDefault();
    const artistName = e.currentTarget.artistName;
    const artistUserName = e.currentTarget.artistUserName;

    //&artistUserName${artistUserName}&

    axios
      .get(`http://localhost:4000/create?artistName=${artistName}`)
      .then(function (response) {
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("Error_Creating_Post", error);
      });
  }

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={(e) => submitPost(e)}>
        <label>{"Artist Name:"} </label>
        <input type="text" name="artistName" placeholder="Name" />

        <label>{"My Medium: "} </label>
        <input type="text" name="medium" placeholder="Medium" />

        <label>{"Collaboration Requests: "} </label>
        <input
          type="text"
          name="collaborationRequests"
          placeholder="Collaboration Requests"
        />

        <label> {"Contact Information: "} </label>
        <input type="text" name="conact" placeholder="Contact Information" />

        <button> Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
