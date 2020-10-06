import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import App from '../index';

const renderComponent = () =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path="/">
        <App />
      </Route>
    </Router>
  );

describe('<App />', () => {
  it('contains home, menu icon, searchbar, mobile-menu, and not-selected', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('home')).toBeInTheDocument();
    expect(queryByTestId('menu-icon')).toBeInTheDocument();
    expect(queryByTestId('search-bar')).toBeInTheDocument();
    expect(queryByTestId('mobile-menu')).toBeInTheDocument();
    expect(queryByTestId('not-selected')).toBeInTheDocument();
  });
});
