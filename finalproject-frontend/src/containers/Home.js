import React, { useState, useEffect } from "react";
import axios from "axios";
import artistInfo from "../components/artistInfo";

function Home() {
  const [artistAPIData, setArtistAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://secure-mesa-42232.herokuapp.com/")
      .then(function (response) {
        if (response.data) {
          setartistAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ artistAPIData });

  return (
    <div>
      <h1> All Artist </h1>;
      {artistAPIData.map((collaborationRequests, i) => (
        <artistInfo artistData={collaborationRequests} key={i} />
      ))}
    </div>
  );
}

export default Home;
