import React, { useState, useEffect } from "react";
import { useAuthToken } from "../util/useAuthToken";
import getSongs from "../api/getSongs";

function SampleTopSongs() {
  const [result, setResult] = useState("");
  const authToken = useAuthToken();
  const token = authToken.token;

  useEffect(() => {
    if (token) {
      getSongs(token)
        .then((response) => {
          setResult(response);
        })
        .catch((err) => console.log("SampleTopPlaylistTracks: ", err));
    }
  }, [token]);
  return <div>SampleTopSongs</div>;
}

export default SampleTopSongs;
