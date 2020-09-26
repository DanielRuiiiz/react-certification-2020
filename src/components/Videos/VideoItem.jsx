/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid container wrap="nowrap" onClick={() => onVideoSelect(video)}>
      <Grid item xs>
        <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
      </Grid>
      <Grid item xs>
        <Typography>{video.snippet.title}</Typography>
      </Grid>
    </Grid>
    // <div onClick={() => onVideoSelect(video)}>
    //   <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
    // </div>
  );
};

export default VideoItem;
