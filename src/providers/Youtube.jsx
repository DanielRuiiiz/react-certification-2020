import axios from 'axios';

const KEY = 'AIzaSyDVQDVY5taQuG3bo1BKP3JEF6JYWvm1JAU';

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
      maxResults: 50,
      type: 'Video',
    },
  });
};

export default getVideos;
