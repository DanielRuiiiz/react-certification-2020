import axios from 'axios';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    key: process.env.REACT_APP_YOUTUBE_API_ALT,
  },
});

const getRelatedVideos = (id) => {
  return youtube.get('/search', {
    params: {
      maxResults: 25,
      type: 'video',
      relatedToVideoId: id,
    },
  });
};

export default getRelatedVideos;
