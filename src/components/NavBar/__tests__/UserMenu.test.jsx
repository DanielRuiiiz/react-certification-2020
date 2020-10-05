import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import UserMenu from '../UserMenu';

const renderComponent = (deviceWidth) =>
  render(
    <Router initialIndex={0} initialEntries={['/']}>
      <Route path="/">
        <UserMenu />
      </Route>
    </Router>
  );

describe('<UserMenu />', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  it('should render the normal user logo when given bigger than mobile dimensions', () => {
    const { queryByAltText } = renderComponent({ deviceWidth: 1400 });
    expect(queryByAltText('User Logo')).toBeInTheDocument();
  });
  it('should render the more logo when given mobile dimensions', () => {
    const { queryByAltText } = renderComponent({ deviceWidth: 375 });
    expect(queryByAltText('More Logo Mobile')).toBeInTheDocument();
  });
});
