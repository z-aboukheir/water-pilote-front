import React, { useContext } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable
} from 'react-native';
import {
  FontAwesome
} from "@expo/vector-icons";
import {
  Color, FontSize
} from "../GlobalStyles";

const LogoutButton = ({signOut}) => {

const handleLogout = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
    alert('Erreur de déconnexion');
  }
};


return(
    <Pressable style={styles.button} onPress={() => handleLogout()}>
      <Text style={styles.buttonText}>Déconnexion</Text>
      <FontAwesome name="sign-out" style={styles.icon} />
    </Pressable>
)
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
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
    marginRight : 10 
  },
});

export {LogoutButton}