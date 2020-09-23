/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../providers/Auth';
import getVideos from '../../providers/Youtube';
import NavBar from '../../components/NavBar';
import VideoList from '../../components/Videos';
// import VideoDetails from '../../components/Videos/VideoDetails.jsx';
import './Home.styles.css';

function HomePage() {
  // const history = useHistory();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [search, setSearch] = useState('');
  console.log('home');
  const handleFormSubmit = async (searchTerm) => {
    setVideos([]);
    console.log(searchTerm);
    const res = await getVideos(searchTerm);
    setSearch(searchTerm);
    setVideos(res.data.items);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <div>
      <NavBar handleFormSubmit={handleFormSubmit} />
      <div>
        {videos.length > 0 ? (
          <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
        ) : (
          <p> Loading...</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
