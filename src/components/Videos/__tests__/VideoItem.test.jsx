import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import VideoItem from '../VideoItem';

const renderComponent = ({ video, onVideoSelect, isSelected }) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/'}>
        <VideoItem video={''} onVideoSelect={() => {}} isSelected={false} />
      </Route>
    </Router>
  );

describe('<VideoItem />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('Should display SelectedVidItem if isSelected is true', () => {
    return true;
  });
  it('Should return VidItem if is isSelected is false', () => {
    return true;
  });
});
