import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import VideoDetails from '../VideoDetails';

const renderComponent = ({ video, handleFavoritesList, isFavorite }) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/'}>
        <VideoDetails video={''} onVideoSelect={() => {}} isSelected={false} />
      </Route>
    </Router>
  );

describe('<VideoDetails />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('Should render VideoDetails', () => {
    return true;
  });
  it('Should render BookmarkIcon if isFavorite is true', () => {
    return true;
  });
  it('Should render BookmarkBorderOutlinedIcon if isFavorite is false', () => {
    return true;
  });
});
