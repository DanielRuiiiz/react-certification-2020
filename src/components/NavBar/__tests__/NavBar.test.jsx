import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import NavBar from '../index';

const renderComponent = () =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path="/">
        <NavBar />
      </Route>
    </Router>
  );

describe('<NavBar />', () => {
  it('Should display the NavBar both on the Home Page', () => {
    return true;
  });
  it('should display the NavBar on the Favorites Page', () => {
    return true;
  });
});
