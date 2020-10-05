import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import HomePage from '../index';

const renderComponent = () =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path={'/'}>
        <HomePage />
      </Route>
    </Router>
  );

describe('<VideoList />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('Should render VideoSelected if isSelected is true', () => {
    return true;
  });
  it('Should render VideoList if is isSelected is false', () => {
    return true;
  });
});
