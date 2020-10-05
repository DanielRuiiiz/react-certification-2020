import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
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

const AlertWithMargin = styled(Alert)`
  margin: 30px;
`;
const FavoritesPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFavorite, setFavorite] = useState(false);
  const [favoritedVideos, setFavoritedVideos] = useState(auth.user.favoriteList || []);
  const [search, setSearch] = useState('');
  const authFavoriteList = auth.user.favoriteList;

  const handleFormSubmit = async (searchTerm) => {
    setVideos([]);
    const res = await getVideos(searchTerm);
    setSearch(searchTerm);
    setVideos(res.data.items);
    history.push('/');
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
      <AlertWithMargin severity="info" data-testid="no-videos">
        No Videos in Favorites Page yet!
      </AlertWithMargin>
    );
  };

  return (
    <FavoriteStyle data-testid="favorites">
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
