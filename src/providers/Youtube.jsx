import axios from 'axios';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: process.env.REACT_APP_YOUTUBE_API_ALT,
  },
});

const getVideos = (search) => {
  return youtube.get('/search', {
    params: {
      q: search,
      maxResults: 25,
      type: 'video',
    },
  });
};

export default getVideos;
