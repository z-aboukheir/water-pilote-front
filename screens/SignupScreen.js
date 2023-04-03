import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InputForm from '../components/InputForm';
import AuthForm from '../components/AuthForm';


const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSignUp = () => {
    // Handle sign up logic here
  };

 
  return (
    <AuthForm textAuth="Sign Up" welcomeText="Je m'appelle Groot et toi" handleSubmit={handleSignUp} textBouton="Register"><InputForm
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
      /></AuthForm>
  )
  
 }

export default SignupScreen;
