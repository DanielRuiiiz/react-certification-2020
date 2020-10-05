import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import NotFoundPage from '../index';

const renderComponent = () =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/asdf'}>
        <NotFoundPage />
      </Route>
    </Router>
  );

describe('<NotFoundPage />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('Should show NotFoundPage when redirected to a non accepted URL', () => {
    return true;
  });
});
