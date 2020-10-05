import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import NotFoundPage from '../index';
import AuthProvider from '../../../providers/Auth';

const renderComponent = () =>
  render(
    <AuthProvider>
      <Router initialIndex={0} initialEntries={['/asf']}>
        <Route path={'/'}>
          <NotFoundPage />
        </Route>
      </Router>
    </AuthProvider>
  );

describe('<NotFoundPage />', () => {
  it('Should show NotFoundPage when redirected to a non accepted URL', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('not-found')).toBeInTheDocument();
  });
});
