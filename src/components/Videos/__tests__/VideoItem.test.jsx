import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import VideoItem from '../VideoItem';

const renderComponent = (video, onVideoSelect, isSelected) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/'}>
        <VideoItem video={video} onVideoSelect={onVideoSelect} isSelected={isSelected} />
      </Route>
    </Router>
  );

const mockVideo = {
  kind: 'mockedyoutube',
  etag: 'mockedetag',
  id: { kind: 'mockedVideo', videoId: '123' },
  snippet: { title: 'hi', description: 'hello', thumbnails: { medium: { url: 'url' } } },
};

describe('<VideoItem />', () => {
  it('Should display SelectedVidItem if isSelected is true', () => {
    const { queryByTestId } = renderComponent(mockVideo, jest.fn(), true);
    expect(queryByTestId('selected')).toBeInTheDocument();
  });
  it('Should return VidItem if is isSelected is false', () => {
    const { queryByTestId } = renderComponent(mockVideo, jest.fn(), false);
    expect(queryByTestId('not-selected')).toBeInTheDocument();
  });
});
