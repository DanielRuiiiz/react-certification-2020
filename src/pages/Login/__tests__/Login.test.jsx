import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../index';
import AuthProvider from '../../../providers/Auth';

const renderComponent = () =>
  render(
    <AuthProvider>
      <Router initialIndex={0} initialEntries={['/']}>
        <Route path={'/'}>
          <LoginPage />
        </Route>
      </Router>
    </AuthProvider>
  );

describe('<Login />', () => {
  it('Should render the login propmt', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('login')).toBeInTheDocument();
  });
  //dont know how to test routes correctly or how to submit forms failed with searchbar
});
