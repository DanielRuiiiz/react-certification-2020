/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={() => onVideoSelect(video)}>
      <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
    </div>
  );
};

export default VideoItem;
