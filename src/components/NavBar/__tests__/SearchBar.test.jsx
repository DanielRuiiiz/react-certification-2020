import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import SearchBar from '../SearchBar';

const renderComponent = (deviceWidth) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path="/">
        <SearchBar />
      </Route>
    </Router>
  );

describe('<SearchBar />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('should display the SearchBar', () => {
    return true;
  });
});
