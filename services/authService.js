import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/HomeScreen';

const API_URL = "http://localhost:3000/user";

const login = async (password, email) => {
  try {
    const response = await fetch(API_URL + "/login", {
      method: "POST",
      body: JSON.stringify({password, email }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          "Une erreur est survenue lors de l'inscription"
      );
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error
  }
}

 const register = async (userData) => {
  try {
    const response = await fetch(API_URL + "/sign-up", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          "Une erreur est survenue lors de la connexion"
      );
    }
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw error;
  }
}




export { login, register};
