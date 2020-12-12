import React from "react";
import { useParams, useEffect } from "react-router-dom";
import axios from "axios";

function UserProfile() {
  const [userProfileData, setUserProfileData] = useState({});
  const [userArtistData, setUserArtistAPIData] = useState([]);
  const { id } = useParams();
  import artistInfo from "../components/artistInfo";

  useEffect(() => {
    axios
      .get(`https://localhost:400/posts/${id}`)
      .then(function (response) {
        if (response.data) {
          setUserArtistAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);
  console.log({ userArtist });

  return (
    <div>
      <h1>User Profile</h1>
      <h2>{"name"} Posts </h2>
      {userArtistData.map((artist, i) => (
        <artistInfo artistdata={artist} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;
