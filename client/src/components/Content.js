import SampleTopPlaylists from "./SampleTopPlaylists";
import { useAuthToken } from "../util/useAuthToken";
import React, { useEffect, useState } from "react";
import getUserData from "../api/getUserData";

const Content = () => {
  const [response, setResponse] = useState("");
  const authToken = useAuthToken();
  const token = authToken.token;

  // load user info
  useEffect(() => {
    if (token) {
      getUserData(token)
        .then((res) => {
          setResponse(res);
        })
        .catch((err) => console.log("SampleTopPlaylistTracks: ", err));
    }
  }, [token]);

  return (
    <>
      <div>Body start here</div>
      <br />
      {/* <SampleTopPlaylists /> */}
    </>
  );
};

export default Content;
