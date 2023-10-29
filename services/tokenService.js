import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store'; 
import jwtDecode from 'jwt-decode';


// Stocker le token dans le secure store
export const storeToken = async (token) => {
  // await SecureStore.setItemAsync('token', token);
  await AsyncStorage.setItem('token', token);

};

// Supprimer le token du secure store
export const removeToken = async () => {
  // await SecureStore.deleteItemAsync('token');
  await AsyncStorage.removeItem('token');
};




// Récupérer le token depuis le secure store
export const getToken = async () => {
  // const token = await SecureStore.getItemAsync('token');
  const token = await AsyncStorage.getItem('token');
  if (token && !isTokenExpired(token)) {
    return token;
  } else {
    await removeToken(); // Supprime le token expiré
    return null;
  }
};

const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};

