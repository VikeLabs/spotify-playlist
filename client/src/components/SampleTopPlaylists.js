import React, { memo } from "react";

const SampleTopPlaylists = ({ playlists }) => {
  return (
    <>
      <h3>Sample Top Playlist</h3>
      {playlists && (
        <div>
          {playlists.map((playlist, index) => (
            <li key={index}>{playlist}</li>
          ))}
        </div>
      )}
    </>
  );
};

export default memo(SampleTopPlaylists);
