import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LogoutButton = () => {
  const { signOut } = useContext(AuthContext);

const handleLogout = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
    alert('Erreur de déconnexion');
  }
};


return( 
<Button title="Déconnexion" onPress={handleLogout} />
)
}
export {LogoutButton}