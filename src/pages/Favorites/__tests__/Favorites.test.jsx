import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import FavoritesPage from '../index';
import AuthProvider from '../../../providers/Auth';

const renderComponent = () =>
  render(
    <AuthProvider>
      <Router initialIndex={0} initialEntries={['/asf']}>
        <Route path={'/'}>
          <FavoritesPage />
        </Route>
      </Router>
    </AuthProvider>
  );

describe('<Favorites />', () => {
  it('Should display FavoritesPage, and should display empty', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('favorites')).toBeInTheDocument();
    expect(queryByTestId('no-videos')).toBeInTheDocument();
  });
});
