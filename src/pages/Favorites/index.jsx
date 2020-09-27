import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useAuth } from '../../providers/Auth';
import getVideos from '../../providers/Youtube';
import NavBar from '../../components/NavBar';
import VideoList from '../../components/Videos';
import VideoSelected from '../SelectedVideo';
import styled from 'styled-components';

const FavoriteStyle = styled('div')`
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
`;

const FavoritesPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFavorite, setFavorite] = useState(false);
  const [favoritedVideos, setFavoritedVideos] = useState(
    auth.mockedUser.favoriteList || []
  );
  const [search, setSearch] = useState('');
  const authFavoriteList = auth.mockedUser.favoriteList;

  const handleFormSubmit = async (searchTerm) => {
    history.push('/');
    setVideos([]);
    const res = await getVideos(searchTerm);
    setSearch(searchTerm);
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
      vids = favoritedVideos.filter((vid) => vid.id.videoId !== video.id.videoId);
    }
    setFavoritedVideos(vids);
    auth.updateUser(vids);
    setFavorite(wasFavorited);
  };

  const NoVideoSelected = () => {
    return authFavoriteList.length > 0 ? (
      <Grid item xs={12}>
        <VideoList
          videos={authFavoriteList}
          onVideoSelect={handleVideoSelect}
          isSelected={false}
        />
      </Grid>
    ) : (
      <Grid item xs={12}>
        No Videos in Favorites Page yet!
      </Grid>
    );
  };

  return (
    <FavoriteStyle>
      <NavBar handleFormSubmit={handleFormSubmit} />
      {Boolean(selectedVideo) && authFavoriteList.length > 0 ? (
        <VideoSelected
          videos={authFavoriteList}
          selectedVideo={selectedVideo}
          handleFavoritesList={handleFavoritesList}
          isFavorite={isFavorite}
          onVideoSelect={handleVideoSelect}
        />
      ) : (
        <NoVideoSelected />
      )}
    </FavoriteStyle>
  );
};

export default FavoritesPage;

/* <Grid
container
direction="cloumn"
justify="flex-start"
alignItems="center"
spacing={3}
>
{/* {videos.length > 0 && (
    <Grid item xs={12}>
      <Paper>
        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
      </Paper>
    </Grid>
  )} }*/
/*
{videos.length > 0 && (
  <Grid item xs={12}>
    <VideoDetails
      video={selectedVideo}
      handleFavoritesList={handleFavoritesList}
      isFavorite={isFavorite}
    />
  </Grid>
)}
{auth.mockedUser.favoriteList.length > 0 ? (
  <Grid item xs={12}>
    <VideoList
      videos={auth.mockedUser.favoriteList}
      onVideoSelect={handleVideoSelect}
    />
  </Grid>
) : (
  <Grid item xs={12}>
    No Videos in Favorites Page yet!
  </Grid>
)}
</Grid> */
