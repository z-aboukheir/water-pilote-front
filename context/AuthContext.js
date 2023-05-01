import React, { createContext, useState, useEffect } from 'react';
import { login, register } from '../services/authService'
import { storeToken, removeToken, getToken } from '../utils/authHelpers';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        setIsAuthenticated(true);
      }
    })();
  }, []);

  const signIn = async (email, password) => {
    const response = await login(email, password);
    if (response && response.token) {
      await storeToken(response.token);
      setIsAuthenticated(true);
    } else {
      throw new Error('Login failed');
    }
  };

  const signUp = async (email, password) => {
    const response = await register(email, password);
    if (response && response.token) {
      await storeToken(response.token);
      setIsAuthenticated(true);
    } else {
      throw new Error('Registration failed');
    }
  };

  const signOut = async () => {
    await removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
