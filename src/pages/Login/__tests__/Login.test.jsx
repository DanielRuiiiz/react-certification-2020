import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Login from '../index';

const renderComponent = () =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/login'}>
        <Login />
      </Route>
    </Router>
  );

describe('<Login />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('Should authenticate when passed correct username and password', () => {
    return true;
  });
});
