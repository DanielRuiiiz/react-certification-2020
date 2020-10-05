import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu';
import AuthProvider from '../../../providers/Auth';

const renderComponent = (authenticated) =>
  render(
    <AuthProvider>
      <Router initialIndex={0} initialEntries={['/']}>
        <Route path="/">
          <BurgerMenu authenticated={authenticated} />
        </Route>
      </Router>
    </AuthProvider>
  );

describe('<BurgerMenu />', () => {
  it('Should render without errors', () => {
    const { container } = renderComponent(false);
    expect(container).toBeInTheDocument();
  });
  it('should render the Menu Icon', () => {
    const { queryByTestId } = renderComponent(false);
    expect(queryByTestId('menu-icon')).toBeInTheDocument();
  });

  it('Should only render the Home ListIcon when not authenticated', () => {
    const { queryByTestId, getByTestId } = renderComponent(false);
    const menuButton = getByTestId('menu-icon');
    fireEvent.click(menuButton);

    expect(queryByTestId('home-icon')).toBeInTheDocument();
    expect(queryByTestId('favorite-icon')).toBeNull();
  });

  it('should render the Favorites ListItem when authenticated', () => {
    const { getByTestId, queryByTestId } = renderComponent(true);
    const menuButton = getByTestId('menu-icon');
    fireEvent.click(menuButton);

    expect(queryByTestId('home-icon')).toBeInTheDocument();
    expect(queryByTestId('favorite-icon')).toBeInTheDocument();
  });
});
