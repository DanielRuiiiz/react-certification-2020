import axios from 'axios';

// const KEY = 'AIzaSyDVQDVY5taQuG3bo1BKP3JEF6JYWvm1JAU';
//const KEY = 'AIzaSyB7_Lc5HGapdoq74vXquNjaa2R0sAQ4fa0';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: process.env.REACT_APP_YOUTUBE_API,
  },
});

const getVideos = (search) => {
  return youtube.get('/search', {
    params: {
      q: search,
      maxResults: 25,
      type: 'Video',
    },
  });
};

export default getVideos;
