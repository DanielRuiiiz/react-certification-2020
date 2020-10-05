import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import VideoList from '../index';

const renderComponent = (videos, onVideoSelect, isSelected) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/'}>
        <VideoList
          videos={videos}
          onVideoSelect={onVideoSelect}
          isSelected={isSelected}
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

describe('<VideoList />', () => {
  it('Should render listVideos if isSelected is true', () => {
    const { queryAllByTestId } = renderComponent(mockedVideos, jest.fn(), true);
    expect(queryAllByTestId('selected')[0]).toBeInTheDocument();
  });
  it('Should render CardWrapper if is isSelected is false', () => {
    const { queryAllByTestId } = renderComponent(mockedVideos, jest.fn(), false);
    expect(queryAllByTestId('not-selected')[0]).toBeInTheDocument();
  });
});
