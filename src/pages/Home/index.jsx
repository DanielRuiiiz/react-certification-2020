import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
// import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import getVideos from '../../providers/Youtube';
import NavBar from '../../components/NavBar';
import VideoList from '../../components/Videos';
import './Home.styles.css';
import VideoDetails from '../../components/Videos/VideoDetails';
import styled from 'styled-components';

const VideoSelectedDetails = styled(Grid)`
  width: 30%;
  height: 100%;
  position: relative;
  overflow: scroll;
`;
const HomeStyle = styled('div')`
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
`;
const HomePage = () => {
  const auth = useAuth();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFavorite, setFavorite] = useState(false);
  const [favoritedVideos, setFavoritedVideos] = useState(
    auth.mockedUser.favoriteList || []
  );
  const [search, setSearch] = useState('');

  const handleFormSubmit = async (searchTerm) => {
    setVideos([]);
    const res = await getVideos(searchTerm);
    setSearch(searchTerm);
    setSelectedVideo(null);
    setVideos(res.data.items);
  };

  const handleVideoSelect = (video) => {
    const isFavorite =
      favoritedVideos.filter((vid) => {
        return vid.id.videoId === video.id.videoId;
      }).length > 0;
    setFavorite(isFavorite);
    setSelectedVideo(video);
  };

  const handleFavoritesList = (video, wasFavorited) => {
    let vids = [];
    if (wasFavorited) {
      vids = [...favoritedVideos, video];
    } else {
      vids = vids.filter((vid) => {
        return vid.id.videoId !== video.id.videoId;
      });
    }
    setFavoritedVideos(vids);
    auth.updateUser(vids);
    setFavorite(wasFavorited);
  };

  return (
    <HomeStyle>
      <NavBar handleFormSubmit={handleFormSubmit} />
      <Grid container justify="flex-start">
        {videos.length > 0 && (
          <VideoDetails
            video={selectedVideo}
            handleFavoritesList={handleFavoritesList}
            isFavorite={isFavorite}
          />
        )}
        {videos.length > 0 ? (
          Boolean(selectedVideo) ? (
            <VideoSelectedDetails item xs={12}>
              <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
            </VideoSelectedDetails>
          ) : (
            <Grid item xs={12}>
              <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
            </Grid>
          )
        ) : (
          <Grid item xs={3}>
            Loading...
          </Grid>
        )}
      </Grid>
    </HomeStyle>
  );
};

export default HomePage;
