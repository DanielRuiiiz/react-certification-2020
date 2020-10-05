import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import VideoDetails from '../VideoDetails';

const renderComponent = (video, handleFavoritesList, isFavorite) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/'}>
        <VideoDetails
          video={video}
          handleFavoritesList={handleFavoritesList}
          isFavorite={isFavorite}
        />
      </Route>
    </Router>
  );

const mockVideo = {
  kind: 'mockedyoutube',
  etag: 'mockedetag',
  id: { kind: 'mockedVideo', videoId: '123' },
  snippet: { title: 'hi', description: 'hello' },
};
const mockedVideos = [mockVideo, mockVideo];
describe('<VideoDetails />', () => {
  //video-details bookmark outlined-bookmark
  it('Should render VideoDetails, with outlined-bookmark', () => {
    const { queryByTestId } = renderComponent(mockVideo, mockedVideos, false);
    expect(queryByTestId('video-details')).toBeInTheDocument();
    expect(queryByTestId('outlined-bookmark')).toBeInTheDocument();
  });
  it('Should render BookmarkIcon if isFavorite is true', () => {
    const { queryByTestId } = renderComponent(mockVideo, mockedVideos, true);
    expect(queryByTestId('video-details')).toBeInTheDocument();
  });
});
