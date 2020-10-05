import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import VideoSelected from '../index';

const renderComponent = (videos, selectedVideo, isFavorite) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/'}>
        <VideoSelected
          videos={videos}
          selectedVideo={selectedVideo}
          handleFavoritesList={jest.fn()}
          isFavorite={isFavorite}
          onVideoSelect={jest.fn()}
        />
      </Route>
    </Router>
  );

const mockVideo = {
  kind: 'mockedyoutube',
  etag: 'mockedetag',
  id: { kind: 'mockedVideo', videoId: '123' },
  snippet: { title: 'hi', description: 'hello', thumbnails: { medium: { url: 'url' } } },
};
const mockVideo2 = {
  kind: 'mockedyoutube',
  etag: 'mockedetag',
  id: { kind: 'mockedVideo', videoId: '124' },
  snippet: { title: 'hi', description: 'hello', thumbnails: { medium: { url: 'url' } } },
};
const mockedVideos = [mockVideo, mockVideo2];

describe('<VideoSelected />', () => {
  it('Should display VideoDetails, and the VideoSelectedDetails', () => {
    const { queryByTestId } = renderComponent(mockedVideos, mockVideo2, false);
    expect(queryByTestId('video-details')).toBeInTheDocument();
    expect(queryByTestId('video-selected-details')).toBeInTheDocument();
  });
});
