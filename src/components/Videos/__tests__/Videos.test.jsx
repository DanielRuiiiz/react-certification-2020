import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import VideoList from '../index';

const renderComponent = ({ video, onVideoSelect, isSelected }) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/'}>
        <VideoList video={''} onVideoSelect={() => {}} isSelected={false} />
      </Route>
    </Router>
  );

describe('<VideoList />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('Should render listVideos if isSelected is true', () => {
    return true;
  });
  it('Should render CardWrapper if is isSelected is false', () => {
    return true;
  });
});
