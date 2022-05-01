import SampleTopPlaylistTract from "./SampleTopPlaylistTracks";
import { memo } from "react";
const Content = () => {
  return (
    <>
      <div>Body start here</div>
      <br />
      <SampleTopPlaylistTract />
    </>
  );
};

export default memo(Content);
