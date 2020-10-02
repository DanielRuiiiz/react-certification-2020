import React from 'react';
import { Link } from 'react-router-dom';
import VideoItem from './VideoItem';
import styled from 'styled-components';

const CardWrapper = styled('div')`
  @media (min-width: 770px) {
    width: 770px;
    -webkit-box-pack: start;
    justify-content: flex-start;
  }
  @media (min-width: 1135px) {
    width: 1135px;
  }
  @media (min-width: 1500px) {
    width: 1500px;
  }
  width: 100%;
  padding: 20px;
  margin: 0px auto;
  flex: 1 1 0%;
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
`;

const VideoList = ({ videos, onVideoSelect, isSelected }) => {
  const listVideos = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}
      isSelected={isSelected}
    />
  ));
  return (
    <>
      {Boolean(isSelected) ? (
        <div>{listVideos}</div>
      ) : (
        <CardWrapper>{listVideos}</CardWrapper>
      )}
      ;
    </>
  );
};

export default VideoList;
