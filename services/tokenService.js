// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store'; 
import jwtDecode from 'jwt-decode';


// Stocker le token dans le secure store
export const storeToken = async (token) => {
  await SecureStore.setItemAsync('token', token);
  // await AsyncStorage.setItem('token', token);

};

// Supprimer le token du secure store
export const removeToken = async () => {
  await SecureStore.deleteItemAsync('token');
  // await AsyncStorage.removeItem('token');
};


// a chaque fois que je fais une requete comment je met le authentifiation a false si le token supprimer sans action de l'utilisateur ??? c'est en fait lors de la requete si token expire je met a false 

// Récupérer le token depuis le secure store
export const getToken = async () => {
  const token = await SecureStore.getItemAsync('token');
  // const token = await AsyncStorage.getItem('token');
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


