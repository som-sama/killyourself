import React from 'react';

function VideoPlayer(props) {
  return (
    <video controls>
      <source src={props.videoUrl} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;
