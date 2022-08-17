import SampleTopPlaylists from "./SampleTopPlaylists";
import { useAuthToken } from "../util/useAuthToken";
import React, { useEffect } from "react";

const Content = () => {
  return (
    <>
      <div>Body start here</div>
      <br />
      <SampleTopPlaylists />
    </>
  );
};

export default Content;
