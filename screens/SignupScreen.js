import React, { useState, useEffect } from 'react';
import InputForm from '../components/InputForm';
import AuthForm from '../components/AuthForm';
import {TextInput, View, Text, FlatList, TouchableOpacity } from 'react-native';

  // ( aucun des champs doit etre vide  avec renvoi à true ou false sur chaque fonction )


const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [city, setCity] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  


  const handleBlur = async () => {
    const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'waterPilot/1.0'
        }
      });
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setLongitude(lon.toLowerCase());
        setLatitude(lat.toLowerCase());
        console.log(longitude, latitude);
        // sinon erreur localisation
      }
    } catch (error) {
      console.error(error); // erruer serveur
    }
  }

  const handleSignUp = async () => {
    try {
      await fetch('http://localhost:3000/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password,
          city,
          longitude,
          latitude
        })
      });
      navigation.navigate('SigninScreen');
    } catch (error) {
      console.log(error);
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])\S{8,}$/
    if (!regex.test(password)) {
      setPasswordError('Le mot de passe doit contenir au moins 8 caractères, une majuscule, un caractère spécial, et pas d\'espace');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Veuillez rentrer une adresse mail correct");
      console.log(emailError)
      return false;
    }
    setEmailError('');
    console.log(emailError)
    return true;
  };



  return (
    <>
  { console.log(emailError)}

    <AuthForm textAuth="Sign In" welcomeText="Je m'appelle Groot et toi" handleSubmit={handleSignUp} textBouton="Register">
      <InputForm
        icon='user'
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
     
      <InputForm
        icon='user'
        placeholder="Email"
        onChangeText={text => {
          setEmail(text);
          validateEmail(text);
        }} 
        value={email}
      />
      {emailError ? <Text style={{ color: 'red', marginTop: -20 }}>{emailError}</Text> : null}

      <InputForm
        icon='user'
        placeholder="Ville"
        onChangeText={text => setCity(text)}
        value={city}
        onBlur={handleBlur}
      />

      <InputForm
        icon='lock'
        placeholder="Password"
        onChangeText={text => {
          setPassword(text);
          validatePassword(text);
        }}
        value={password}
        secureText
      />
      {passwordError ? <Text style={{ color: 'red', marginTop: -20 }}>{passwordError}</Text> : null}

    </AuthForm>
  </>
  )

}

export default SignupScreen;
