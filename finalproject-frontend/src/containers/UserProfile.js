import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import artistInfo from "../components/artistInfo";

function UserProfile() {
  const [userProfileData, setUserProfileData] = useState({});
  const [userArtistData, setUserArtistData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://localhost:400/posts/${""}`)
      .then(function (response) {
        if (response.data) {
          setUserArtistData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);
  console.log({ userProfileData });

  return (
    <div>
      <h1>User Profile</h1>
      <h2> Posts </h2>
      {userArtistData.map((artist, i) => (
        <artistInfo artistData={artist} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;
