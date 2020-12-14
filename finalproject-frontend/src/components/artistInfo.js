import React from "react";

function artistInfo({ artistData }) {
  return (
    <div className="artistData">
      <h2>{artistData.collaborationRequests}</h2>
      {/* <h3>By:{artistName}</h3> */}
      <h4>
        <a href={`/user/${artistData.artistUserName}`}>
          OR {artistData.artistUserName}{" "}
        </a>
      </h4>
      <h5>Collaboration Requests</h5>
    </div>
  );
}

export default artistInfo;
