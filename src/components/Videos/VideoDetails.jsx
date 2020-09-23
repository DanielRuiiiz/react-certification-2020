import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui embed">
      <iframe title="Video Player" src={videoSource} />
    </div>
  );
};

export default VideoDetails;
