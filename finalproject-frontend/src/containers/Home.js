import React, { useState, useEffect } from "react";
import axios from "axios";
import artistInfo from "../components/artistInfo";

function Home() {
  const [artistAPIData, setArtistAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://arcane-scrubland-66208.herokuapp.com/all-artists ")
      .then(function (response) {
        if (response.data) {
          setArtistAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ artistAPIData });

  return (
    <div>
      <h1> All Posts </h1>
      {artistAPIData.map((artistName, i) => (
        <artistInfo artistData={artistName} key={i} />
      ))}
    </div>
  );
}

export default Home;
