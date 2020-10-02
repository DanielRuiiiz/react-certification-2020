import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { useAuth } from '../../providers/Auth';
import getVideos from '../../providers/Youtube';
import NavBar from '../../components/NavBar';
import VideoList from '../../components/Videos';
import VideoSelected from '../SelectedVideo';
import './Home.styles.css';
import styled from 'styled-components';

const Welcome = styled(Typography)`
  text-align: center;
  padding-top: 30px;
`;
const HomeStyle = styled('div')`
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
`;
const HomePage = () => {
  const auth = useAuth();
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFavorite, setFavorite] = useState(false);
  const [favoritedVideos, setFavoritedVideos] = useState(auth.user.favoriteList || []);
  const [search, setSearch] = useState('Eater');

  const handleFormSubmit = async (searchTerm) => {
    setVideos([]);
    const res = await getVideos(searchTerm);
    setSearch(searchTerm);
    setSelectedVideo(null);
    setVideos(res.data.items);
  };

  useEffect(() => {
    async function initialFormSubmit(searchTerm) {
      setVideos([]);
      const res = await getVideos(searchTerm);
      setSearch(searchTerm);
      setSelectedVideo(null);
      setVideos(res.data.items);
    }
    initialFormSubmit(search);
  }, [search]);

  const handleVideoSelect = (video) => {
    const isFavorited =
      favoritedVideos.filter((vid) => {
        return vid.id.videoId === video.id.videoId;
      }).length > 0;
    setFavorite(isFavorited);
    setSelectedVideo(video);
    //history.push(`/${video.id.videoId}`);
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
  console.log('home sleected videos', selectedVideo);
  console.log('home videos', videos);
  return (
    <HomeStyle>
      <NavBar handleFormSubmit={handleFormSubmit} />
      {Boolean(selectedVideo) ? (
        <VideoSelected
          videos={videos}
          selectedVideo={selectedVideo}
          handleFavoritesList={handleFavoritesList}
          isFavorite={isFavorite}
          onVideoSelect={handleVideoSelect}
        />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Welcome variant="h2">{'Welcome'}</Welcome>
          </Grid>
          <Grid item xs={12}>
            <VideoList
              videos={videos}
              onVideoSelect={handleVideoSelect}
              isSelected={false}
            />
          </Grid>
        </Grid>
      )}
    </HomeStyle>
  );
};

export default HomePage;
{
  /* <HomeStyle>
<NavBar handleFormSubmit={handleFormSubmit} />
{Boolean(selectedVideo) ? (
  <VideoSelected
    videos={videos}
    selectedVideo={selectedVideo}
    handleFavoritesList={handleFavoritesList}
    isFavorite={isFavorite}
    onVideoSelect={handleVideoSelect}
  />
) : (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Welcome variant="h2">{'Welcome'}</Welcome>
    </Grid>
    <Grid item xs={12}>
      <VideoList
        videos={videos}
        onVideoSelect={handleVideoSelect}
        isSelected={false}
      />
    </Grid>
  </Grid>
)}
</HomeStyle> */
}
