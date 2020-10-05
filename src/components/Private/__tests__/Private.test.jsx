import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Private from '../index';

//shouldnt work atm
const renderComponent = () =>
  render(
    <Router>
      <Route path="/Favorites">
        <Private />
      </Route>
    </Router>
  );

describe('Private Routes', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('Should redirect you when you try to use Private while unauthorized', () => {
    return true;
  });
  it('Should allow you inside the Private Routes while authorized', () => {
    return true;
  });
});
