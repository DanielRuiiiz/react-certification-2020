/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';

const VidItem = styled(Card)`
  ${({ theme }) => `
  width: 345px;
  height: 345px;
  margin: 10px;
  display: flex;
  padding: 20px;
  flex-flow: row wrap;
  &:hover:{ 
    backgroundColor:${fade('#FFFF', 0.2)}}`}
`;
const SelectedVidItem = styled('div')`
  height: 100px;
  position: relative;
  display: flex;
`;

const SelectedSearchVidImg = styled('img')`
  height: 100px;
  width: 120px;
`;
const SelectedSearchTitle = styled('div')`
  height: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 5px;
  box-sizing: border-box;
`;
const VideoItem = ({ video, onVideoSelect, isSelected }) => {
  return (
    <>
      {isSelected ? (
        <>
          <SelectedVidItem onClick={() => onVideoSelect(video)}>
            <SelectedSearchVidImg
              alt={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
            />
            <SelectedSearchTitle>
              <Typography variant="body1">{video.snippet.title}</Typography>
            </SelectedSearchTitle>
          </SelectedVidItem>
          <Divider />
        </>
      ) : (
        <>
          <VidItem onClick={() => onVideoSelect(video)}>
            <CardMedia
              component="img"
              image={video.snippet.thumbnails.medium.url}
              src={video.snippet.thumbnails.medium.url}
            />
            <CardContent>
              <Typography variant="h6">{video.snippet.title}</Typography>
            </CardContent>
          </VidItem>
        </>
      )}
    </>

    // <div onClick={() => onVideoSelect(video)}>
    //   <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
    // </div>
  );
};

export default VideoItem;
