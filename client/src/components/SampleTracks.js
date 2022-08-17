import React, { memo } from "react";

const SampleTracks = ({ sampleTracks }) => {
  console.log(sampleTracks);
  return (
    <>
      <h3>Sample Tracks</h3>
      {sampleTracks && (
        <div>
          {sampleTracks.map((sampleTrack, index) => (
            <li key={index}>{sampleTrack}</li>
          ))}
        </div>
      )}
    </>
  );
};

export default memo(SampleTracks);
