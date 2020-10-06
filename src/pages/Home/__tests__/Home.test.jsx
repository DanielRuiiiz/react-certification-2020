import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import HomePage from '../index';
import AuthProvider from '../../../providers/Auth';
const renderComponent = () =>
  render(
    <AuthProvider>
      <Router initialIndex={0} initialEntries={['/']}>
        <Route path={'/'}>
          <HomePage />
        </Route>
      </Router>
    </AuthProvider>
  );

describe('<HomePage />', () => {
  it('Should render HomePage', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('home')).toBeInTheDocument();
  });
  it('Should render the NavBar', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('menu-icon')).toBeInTheDocument();
    expect(queryByTestId('search-bar')).toBeInTheDocument();
    expect(queryByTestId('mobile-menu')).toBeInTheDocument();
  });
  it('Should render VideoList if is isSelected is false', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('not-selected')).toBeInTheDocument();
  });
});
