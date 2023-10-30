import React, { useContext } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import {
  FontAwesome
} from "@expo/vector-icons";
import {
  Color, FontSize
} from "../GlobalStyles";

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
    <Pressable style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>Log Out  </Text>
      <FontAwesome name="sign-out" style={styles.icon} />
    </Pressable>
)
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  icon: {
    color: Color.darkGrey,
    fontSize: 24,
  },
  buttonText: {
    color: Color.darkGrey,
    fontSize: FontSize.size_base,
    fontWeight: 'bold',
  },
});

export {LogoutButton}