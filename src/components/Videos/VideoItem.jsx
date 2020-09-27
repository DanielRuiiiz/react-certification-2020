/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
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
const VideoItem = ({ video, onVideoSelect }) => {
  return (
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

    // <div onClick={() => onVideoSelect(video)}>
    //   <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
    // </div>
  );
};

export default VideoItem;
