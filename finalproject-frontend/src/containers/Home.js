import React, { useState, useEffect } from "react";
import axios from "Axios";

function Home() {
  const [sampleAPIData, setSampleAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://secure-mesa-42232.herokuapp.com/")
      .then(function (response) {
        if (response.data) {
          setSampleAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ sampleAPIData });
  return (
    <div>
      <h1> Hi </h1>;
      {sampleAPIData.map((item, i) => {
        <div key={i}>
          <p>Username: {item.username}</p>
          <p>work: {item.work}</p>
          <p>collaboration: {item.collaboration}</p>
        </div>;
      })}
    </div>
  );
}

export default Home;
