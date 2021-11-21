import React, { useEffect, useState } from "react";
import getTopPlaylistTrack from "../Apis/getTopPlaylistTracks";

const SampleTopPlaylistTracts = () => {
  const [result, setResult] = useState("");
  useEffect(() => {
    getTopPlaylistTrack()
      .then((res) => {
        setResult(res);
      })
      .catch((err) =>
        console.log("fetch Api error on SampleTopPlaylistTracks")
      );
  }, []);
  return (
    <>
      <h3>Sample Top Playlist</h3>
      {result && <div>{result.someText}</div>}
    </>
  );
};

export default SampleTopPlaylistTracts;
