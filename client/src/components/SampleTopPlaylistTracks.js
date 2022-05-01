import React, { useEffect, useState, memo } from "react";
import getPlaylist from "../api/getPlaylist";
import { useAuthToken } from "../util/useAuthToken";
import getTopPlaylistTracks from "../api/getTopPlaylistTracks";

const SampleTopPlaylistTracts = () => {
  const [result, setResult] = useState("");
  const authToken = useAuthToken();
  const token = authToken.token;

  useEffect(() => {
    if (token) {
      // getTopPlaylistTracks() // test API connection
      getPlaylist(token)
        .then((res) => {
          console.log(res);
          setResult(res);
        })
        .catch((err) => console.log("SampleTopPlaylistTracks: ", err));
    }
  }, [token]);
  // }, []);
  return (
    <>
      <h3>Sample Top Playlist</h3>
      {result && <div>{result.someText}</div>}
    </>
  );
};

export default memo(SampleTopPlaylistTracts);
