import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Private exact path="/secret">
            <SecretPage />
          </Private>
          <Private exact path="/favorites">
            <FavoritesPage />
          </Private>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
