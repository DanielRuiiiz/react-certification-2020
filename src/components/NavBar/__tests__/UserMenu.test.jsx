import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import UserMenu from '../UserMenu';
import AuthProvider from '../../../providers/Auth';

const renderComponent = (authenticated) =>
  render(
    <AuthProvider>
      <Router initialIndex={0} initialEntries={['/']}>
        <Route path="/">
          <UserMenu authenticated={authenticated} />
        </Route>
      </Router>
    </AuthProvider>
  );

describe('<UserMenu />', () => {
  it('should render the login button when not logged in', () => {
    const { getByTestId, queryByTestId } = renderComponent(false);

    const userMenu = getByTestId('mobile-menu');
    fireEvent.click(userMenu);

    expect(queryByTestId('log-in')).toBeInTheDocument();
  });
  it('should render the logout button when logged in, ', () => {
    const { getByTestId, queryByTestId } = renderComponent(true);

    const userMenu = getByTestId('mobile-menu');
    fireEvent.click(userMenu);

    expect(queryByTestId('log-out')).toBeInTheDocument();
  });
});
