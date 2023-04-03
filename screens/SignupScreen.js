import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import AuthForm from '../components/AuthForm';


const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
       
      }
    } catch (error) {
      console.error(error);
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
          zipCode,
          longitude,
          latitude
        })
      });
      // handle successful registration
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };



  return (
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
        onChangeText={text => setEmail(text)}
        value={email}
      />
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
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
    </AuthForm>
  )

}

export default SignupScreen;
