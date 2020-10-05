import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import VideoSelected from '../index';

const renderComponent = () =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/'}>
        <VideoSelected
          videos={[]}
          selectedVideo={}
          handleFavoritesList={() => {}}
          isFavorite={false}
          onVideoSelect={() => {}}
        />
      </Route>
    </Router>
  );

describe('<VideoSelected />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('Should display VideoDetails', () => {
    return true;
  });
  it('Should display VideoSelectedDetails', () => {
    return true;
  });
});
