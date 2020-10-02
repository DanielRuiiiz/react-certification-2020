import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const [user, setUser] = useState({
    id: '123',
    name: 'Wizeline',
    avatarUrl:
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    favoriteList: [],
  });
  const updateUser = (favorites) => {
    setUser({
      ...user,
      favorites,
    });
  };
  const login = useCallback(
    (username, password) => {
      if (username === 'wizeline' && password === 'Rocks!') {
        setAuthenticated(true);
        return user;
      }

      storage.set(AUTH_STORAGE_KEY, true);
    },
    [user]
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, updateUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
