import React, { Children, useState } from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InputForm from '../components/InputForm';
import { useFonts } from 'expo-font';


const AuthForm = ({textAuth, children, handleSubmit, textBouton}) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerTextAuth}>
        <Text style={styles.textAuth}>
          {textAuth}
        </Text>
        <Image source={require('../assets/On.png')} style={styles.imageOn} />
      </View >
      <View style={styles.containerForm}>
        <Image source={require('../assets/robot.png')} style={styles.imageRobot} />
        <Text style={styles.welcomeText}>Je m'appelle Groot et toi ?</Text>
        {children}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{textBouton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  containerTextSign: {
    justifyContent: "flex-end",
    marginBottom: 50,
    flexDirection: 'row'
  },
  textSign: {
    fontFamily: 'MyFont',
    textDecorationLine: 'underline',
    fontSize: 25,
    color: '#7A7272',
    textShadowColor: '#00000040',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 5,
  },

  imageOn: {
    position: 'relative',
    width: 40,
    height: 40,
  },

  containerForm: {
    gap: 30,
    alignItems: 'center',
  },

  imageRobot: {
    position: 'relative',
    width: 140,
    height: 140,
  },

  welcomeText: {
    fontFamily: 'MyFont',
    fontSize: 20,
    color: '#7A7272',
  },
  button: {
    backgroundColor: '#25CEDE',
    borderRadius: 36,
    shadowColor: '#9f9f9f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 5,
    padding: 10,
    flexDirection: 'row',
    marginTop: 25
  }, 
  buttonText: {
    fontFamily: 'MyFont',
    fontSize: 18,
    color: '#fff',
    textAlign: "center",
    flex :1
  }
});

export default AuthForm;