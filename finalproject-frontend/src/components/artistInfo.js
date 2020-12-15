// similar to recipe card (21:56)
import React from "react";

function artistInfo({ artistData }) {
  return (
    <div className="artistData">
      <a href={`/user/${artistData.artistID}`}>
        By: {artistData.artistUserName}{" "}
      </a>
      OR {artistData.artistUserName}
      <h2>Artist Medium:{artistData.medium}</h2>
      <h3>Collaboration Requests {artistData.collaborationRequests}</h3>
      <h4>Contact Information: {artistData.contactInfo}</h4>
    </div>
  );
}

export default artistInfo;
