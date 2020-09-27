import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import styled from 'styled-components';

const VidDetails = styled(Card)`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

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
    <VidDetails>
      <CardMedia component="div">
        <iframe title="Video Player" src={videoSource} />
      </CardMedia>
      <CardContent>
        <Typography variant="h6">
          {video.snippet.title}
          <IconButton onClick={onFavorited}>
            {isFavorite ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
          </IconButton>
        </Typography>
        <Typography wrap="nowrap">{video.snippet.description}</Typography>
      </CardContent>
    </VidDetails>
  );
};
// <Grid
//   container
//   direction="column"
//   justify="flex-start"
//   alignItems="center"
//   wrap="nowrap"
// >
//   <Grid item xs>
//     <div>
//       <iframe title="Video Player" src={videoSource} />
//     </div>
//   </Grid>
//   <Grid item>
//     <Typography variant="h6">{video.snippet.title}</Typography>
//     <Typography>{video.snippet.description}</Typography>
//     <IconButton onClick={onFavorited}>
//       {isFavorite ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
//     </IconButton>
//   </Grid>
// </Grid>
export default VideoDetails;
