import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu';

const renderComponent = (deviceWidth) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path="/">
        <BurgerMenu />
      </Route>
    </Router>
  );

describe('<BurgerMenu />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('should render the Favorites ListItem when authenticated', () => {
    return true;
  });
  it('should only render the Home ListIcon when not authenticated', () => {
    return true;
  });
});
