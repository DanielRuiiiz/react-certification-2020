import axios from 'axios';

// const KEY = 'AIzaSyDVQDVY5taQuG3bo1BKP3JEF6JYWvm1JAU';
const KEY = 'AIzaSyB7_Lc5HGapdoq74vXquNjaa2R0sAQ4fa0';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: KEY,
  },
});

const getVideos = (search) => {
  console.log('here1');
  return youtube.get('/search', {
    params: {
      q: search,
      maxResults: 5,
      type: 'Video',
    },
  });
};

export default getVideos;
