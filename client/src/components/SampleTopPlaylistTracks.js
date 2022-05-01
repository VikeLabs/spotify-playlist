import React, { useEffect, useState, memo } from "react";
import getTopPlaylistTrack from "../api/getTopPlaylistTracks";
import getPlaylist from "../api/getPlaylist";
import { useAuthToken } from "../util/useAuthToken";

const SampleTopPlaylistTracts = () => {
  const [result, setResult] = useState("");
  const authToken = useAuthToken();
  const token = authToken.token;

  console.log(token);
  useEffect(() => {
    // getTopPlaylistTrack()
    getPlaylist(token)
      .then((res) => {
        setResult(res);
      })
      .catch((err) => console.log("SampleTopPlaylistTracks: ", err));
  }, []);
  return (
    <>
      <h3>Sample Top Playlist</h3>
      {result && <div>{result.someText}</div>}
    </>
  );
};

export default memo(SampleTopPlaylistTracts);
