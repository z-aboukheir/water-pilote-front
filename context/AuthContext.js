import React, { createContext, useState, useEffect } from 'react';
import { login, register } from '../services/authService'
import { storeToken, removeToken, getToken } from '../services/tokenService';
import { fetchWithToken } from '../services/fetchService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        setIsAuthenticated(true);
      }else{
        setIsAuthenticated(false);
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

  
  const signUp = async (userData) => {
    const response = await register(userData);
    if (!response) {
      throw new Error('Registration failed');
    }
  };

  const signOut = async () => {
    await removeToken();
    setIsAuthenticated(false);
  };



  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, signUp, signOut, fetchWithToken: (url, options) => fetchWithToken(url, options, setIsAuthenticated) }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
