import jwtDecode from 'jwt-decode';
import * as Keychain from 'react-native-keychain';

export const storeToken = async (token) => {
  await Keychain.setGenericPassword('token', token);
};

export const removeToken = async () => {
  await Keychain.resetGenericPassword();
};

export const getToken = async () => {
  const credentials = await Keychain.getGenericPassword();
  return credentials && credentials.password ? credentials.password : null;
};

// export const getUserFromToken = async () => {
//   const token = await getToken();
//   if (!token) return null;
//   try {
//     const decodedToken = jwtDecode(token);
//     return decodedToken;
//   } catch (error) {
//     console.log('Error decoding token:', error);
//     return null;
//   }
// };
