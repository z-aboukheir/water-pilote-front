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
    try {
      const response = await login(email, password);
      if (response && response.token) {
        await storeToken(response.token);
        setIsAuthenticated(true);
      } 
      // else {
      //   throw new Error("erreur d'identtification");
      // }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la connexion :', error);
      throw error
    }
  };

  
  const signUp = async (userData) => {
    try {
      const response = await register(userData);
      console.log(response)
      // if (!response.ok) {
      //   throw new Error('Une erreur s\'est produite lors de l\'inscription');
      // }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'inscription :', error);
      throw error
    }
  };

  const signOut = async () => {
    try {
      await removeToken();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la déconnexion :', error);
    }
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