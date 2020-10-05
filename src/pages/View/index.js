import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import getVideos from '../../providers/Youtube';
import getRelatedVideos from '../../providers/RelatedVideos';
import { useAuth } from '../../providers/Auth';
import NavBar from '../../components/NavBar';
import VideoSelected from '../../components/Videos';
import styled from 'styled-components';

const HomeStyle = styled('div')`
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
`;
const ViewPage = () => {
  const { id } = useParams();
  const auth = useAuth();
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [isFavorite, setFavorite] = useState(false);
  const [favoritedVideos, setFavoritedVideos] = useState(auth.user.favoriteList || []);
  const [selectedVideo, setSelectedVideo] = useState(null);

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
      setSelectedVideo(res.data.items[0]);
      const relatedVideos = await getRelatedVideos(id);
      const allVideos = res.data.items.concat(relatedVideos.data.items);
      setSearch(searchTerm);
      setVideos(allVideos);
    }
    initialFormSubmit(id);
  }, [id]);

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
  const handleVideoSelect = (video) => {
    const isFavorited =
      favoritedVideos.filter((vid) => {
        return vid.id.videoId === video.id.videoId;
      }).length > 0;
    setFavorite(isFavorited);
    setSelectedVideo(video);
    history.push(`/${video.id.videoId}`);
  };
  console.log('selected', selectedVideo);
  console.log('videos', videos);
  return (
    <HomeStyle handleFormSubmit={handleFormSubmit}>
      <NavBar />
      <VideoSelected
        videos={videos}
        selectedVideo={selectedVideo}
        handleFavoritesList={handleFavoritesList}
        isFavorite={isFavorite}
        onVideoSelect={handleVideoSelect}
      />
    </HomeStyle>
  );
};

export default ViewPage;
