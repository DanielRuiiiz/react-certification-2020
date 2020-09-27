import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import styled from 'styled-components';

const VidDetails = styled('div')`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const VidDetailsIframe = styled('iframe')`
  width: 100%;
  height: 500px;
`;

const VidDetailsTitle = styled('div')`
  padding: 10px 30px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const VidDetailsDescription = styled(Typography)`
  padding: 0px 30px;
  box-sizing: border-box;
`;
const VideoDetails = ({ video, handleFavoritesList, isFavorite }) => {
  if (!video) {
    return null;
  }
  const onFavorited = (event) => {
    event.preventDefault();
    const wasFavorite = !isFavorite;
    handleFavoritesList(video, wasFavorite);
  };

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <VidDetails>
      <VidDetailsIframe alt="Video Player" src={videoSource} />
      <VidDetailsTitle>
        <Typography variant="h6">
          {video.snippet.title}
          <IconButton onClick={onFavorited}>
            {isFavorite ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
          </IconButton>
        </Typography>
      </VidDetailsTitle>
      <VidDetailsDescription variant="body2" color="textSecondary" wrap="nowrap">
        {video.snippet.description}
      </VidDetailsDescription>
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
