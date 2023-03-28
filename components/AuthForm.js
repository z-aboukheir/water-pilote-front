import React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';

const AuthForm = () => {
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
        <InputForm
          imagePath="../assets/user.png"
          placeholder="Username"
          onChangeText={text => setEmail(text)}
          value={email}
        />
         <InputForm
          imagePath='../assets/user.png'
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <InputForm
        imagePath='../assets/lock.png'
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
});

export default AuthForm;
