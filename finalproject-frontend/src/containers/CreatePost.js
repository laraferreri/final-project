import React from "react";
import axios from "axios";

function CreatePost({ userAuthInfo }) {
  console.log({ userAuthInfo });
  function submitPost(e) {
    e.preventDefault();
    const artistName = e.currentTarget.artistName;
    const artistUserName = e.currentTarget.artistUserName;
    // const collaborationRequests = e.currentTarget.artistName;

    Axios.get(
      `http://localhost:400/create?artistName=${aristName}&artistUserName${artistUserName}&`
    )
      .then(function (response) {})
      .catch(function (error) {});
    console.log("Error_Creating_Post", error);
  }

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={(e) => submitPost(e)}>
        <label>
          <input type="text" name="artistName" placeholder="Name" />
        </label>
        <label>
          <input type="text" name="artistUserName" placeholder="Username" />
        </label>
        {/* <label>
          <input
            type="text"
            name="collaborationRequests"
            placeholder="Collaboration Requests"
          />
        </label> */}
        <button type="submit"> Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
