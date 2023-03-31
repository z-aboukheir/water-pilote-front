import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InputForm from '../components/InputForm';
import { useFonts } from 'expo-font';


const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontLoaded] = useFonts({
    MyFont: require('../assets/fonts/Poppins-Regular.ttf'),
  });

  const handleSignUp = () => {
    // Handle sign up logic here
  };

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTextSign}>
        <Text style={styles.textSign}>
          Sign In
        </Text>
        <Image source={require('../assets/On.png')} style={styles.imageOn} />
      </View >
      <View style={styles.containerForm}>
        <Image source={require('../assets/robot.png')} style={styles.imageRobot} />
        <Text style={styles.welcomeText}>Je m'appelle Groot et toi ?</Text>
        <InputForm
          icon='user'
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <InputForm
          icon='user'
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
          <InputForm
          icon='lock'
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Register</Text>
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

export default SignupScreen;
