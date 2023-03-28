import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import InputForm from '../components/InputForm';
import { useFonts } from 'expo-font';


const SignupScreen = () => {
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
        icon = 'user'
          placeholder="Username"
          onChangeText={text => setEmail(text)}
          value={email}
        />
         <InputForm
         icon = 'user'
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <InputForm
        icon = 'lock'
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignUp} />
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
    gap: 20,
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
  }
});

export default SignupScreen;
