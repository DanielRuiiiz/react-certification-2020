import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { useAuth } from '../../providers/Auth';
import getVideos from '../../providers/Youtube';
import NavBar from '../../components/NavBar';
import VideoList from '../../components/Videos';
import VideoDetails from '../../components/Videos/VideoDetails';

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

  const handleFormSubmit = async (searchTerm) => {
    history.redirect('/');
    setVideos([]);
    // console.log(searchTerm);
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
    // console.log('handleFavoritesList', video, wasFavorited);
    let vids = [];
    if (wasFavorited) {
      vids = [...favoritedVideos, video];
    } else {
      vids = vids.filter((vid) => {
        return vid.id.videoId !== video.id.videoId;
      });
    }
    // console.log('wasFavoritedVids', vids);
    setFavoritedVideos(vids);
    auth.updateUser(vids);
    setFavorite(wasFavorited);
    // console.log('homepage habdlefavoriteslist', isFavorite);
  };
  console.log('fav list in favorites', auth.mockedUser.favoriteList);
  return (
    <>
      <div style={{ marginTop: '1em' }}>
        <NavBar handleFormSubmit={handleFormSubmit} />
        <br />
        <Grid
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
          )} */}
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
        </Grid>
      </div>
    </>
  );
};

export default FavoritesPage;
