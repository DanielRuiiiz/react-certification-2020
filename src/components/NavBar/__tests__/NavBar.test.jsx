import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import NavBar from '../index';
import AuthProvider from '../../../providers/Auth';
import HomePage from '../../../pages/Home';
import FavoritesPage from '../../../pages/Favorites';

const renderComponent = () =>
  render(
    <AuthProvider>
      <Router initialIndex={0} initialEntries={['/']}>
        <Route path="/">
          <NavBar />
        </Route>
      </Router>
    </AuthProvider>
  );

const renderHomePage = () =>
  render(
    <AuthProvider>
      <Router initialIndex={0} initialEntries={['/']}>
        <Route path="/">
          <HomePage />
        </Route>
      </Router>
    </AuthProvider>
  );

const renderFavoritesPage = () =>
  render(
    <AuthProvider>
      <Router initialIndex={0} initialEntries={['/']}>
        <Route path="/">
          <FavoritesPage />
        </Route>
      </Router>
    </AuthProvider>
  );
describe('<NavBar />', () => {
  it('Should display the NavBar both on the Home Page', () => {
    const { queryByTestId } = renderHomePage();
    const NavBar = queryByTestId('nav-bar');
    expect(NavBar).toBeInTheDocument();
  });

  it('should display the NavBar on the Favorites Page', () => {
    const { queryByTestId } = renderFavoritesPage();
    const NavBar = queryByTestId('nav-bar');
    expect(NavBar).toBeInTheDocument();
  });

  it('should Include all the necesary components', () => {
    const { queryByTestId } = renderComponent();

    const MenuIcon = queryByTestId('menu-icon');
    const SearchBar = queryByTestId('search-bar');
    const UserMenu = queryByTestId('mobile-menu');

    expect(MenuIcon).toBeInTheDocument();
    expect(SearchBar).toBeInTheDocument();
    //Search for mobile menu instead because when it tests the dimensions are that of mobile
    expect(UserMenu).toBeInTheDocument();
  });
});
