import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const listVideos = videos.map((video) => (
    <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
  ));
  return <div>{listVideos}</div>;
};

export default VideoList;
