import AsyncStorage from "@react-native-async-storage/async-storage";
import SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import { getItemAsync, setItemAsync, deleteItemAsync, isAvailableAsync } from 'expo-secure-store';

// Stocker le token dans le secure store
export const storeToken = async (token) => {
  await setItemAsync("token", token);
  // await SecureStore.setItemAsync("token", token);
  // await AsyncStorage.setItem('token', token);
};

// Supprimer le token du secure store
export const removeToken = async () => {
  await deleteItemAsync("token");
  // await SecureStore.deleteItemAsync("token");
  // await AsyncStorage.removeItem('token');
};

// Récupérer le token depuis le secure store
export const getToken = async () => {
  try {
    const token = await getItemAsync("token");
    // const token = await SecureStore.getItemAsync("token");
    // const token = await AsyncStorage.getItem('token');
    if (token && !isTokenExpired(token)) {
      return token;
    } else {
      await removeToken(); // Supprime le token expiré
      return null;
    }
  } catch {
    console.log("pas de token trouvé");
  }
};

const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};
