import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const VideoDetails = ({ video, handleFavoritesList, isFavorite }) => {
  if (!video) {
    console.log('no video in video detalis');
    return null;
  }
  const onFavorited = (event) => {
    event.preventDefault();
    const wasFavorite = !isFavorite;
    handleFavoritesList(video, wasFavorite);
    console.log(wasFavorite);
  };

  console.log('isFaovrite', isFavorite);
  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      wrap="nowrap"
    >
      <Grid item xs={12}>
        <div>
          <iframe title="Video Player" src={videoSource} />
        </div>
      </Grid>
      <Grid item>
        <Typography>{video.snippet.title}</Typography>
        <Typography>{video.snippet.description}</Typography>
        <IconButton onClick={onFavorited}>
          {isFavorite ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default VideoDetails;
