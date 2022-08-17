import React, { useEffect, useState, memo } from "react";
import getPlaylist from "../api/getUserData";
import { useAuthToken } from "../util/useAuthToken";

const SampleTopPlaylists = () => {
  const [result, setResult] = useState("");
  const authToken = useAuthToken();
  const token = authToken.token;

  useEffect(() => {
    if (token) {
      getPlaylist(token)
        .then((response) => {
          setResult(response);
        })
        .catch((err) => console.log("SampleTopPlaylistTracks: ", err));
    }
  }, [token]);

  return (
    <>
      <h3>Sample Top Playlist</h3>
      {result && <h5>{result.type}</h5>}
      {result && <div>{result.username}</div>}
      {result && (
        <div>
          {result.playlists.map((playlist, index) => (
            <li key={index}>{playlist}</li>
          ))}
        </div>
      )}
    </>
  );
};

export default memo(SampleTopPlaylists);
