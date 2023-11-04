import React, { useState, useContext } from "react";
import InputForm from "../components/InputForm";
import AuthForm from "../components/AuthForm";
import LocationPicker from "../components/LocationPicker";

import { Text, ScrollView } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocationError, setSelectedLocationError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();
  const { signUp } = useContext(AuthContext);

  const handleSignUp = async () => {
    if (
      !usernameError &&
      !emailError &&
      !passwordError &&
      !selectedLocationError &&
      areAllFieldsFilled()
    ) {
      try {
        const response = await signUp({
          password: password,
          name: username,
          email: email,
          city: selectedLocation.name,
          longitude: selectedLocation.longitude,
          latitude: selectedLocation.latitude,
        });
        navigation.navigate("SignIn");
      } catch (error) {
        // console.log(error);

        setError("Une erreur est survenue lors de l'inscription");
        return;
      }
    } else {
      validateUsername(username);
      validatePassword(password);
      validateEmail(email);
      validateSelectedLocation(selectedLocation);
      setError("Veuillez remplir tous les champs pour vous inscrire.");
    }
  };

  const areAllFieldsFilled = () => {
    return username && email && password && selectedLocation;
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])\S{8,}$/;
    if (!regex.test(password)) {
      setPasswordError(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un caractère spécial, et pas d'espace"
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Veuillez rentrer une adresse mail correct");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateSelectedLocation = (location) => {
    if (!location) {
      setSelectedLocationError("Veuillez sélectionner une localisation");
      return false;
    }
    setSelectedLocationError("");
    return true;
  };

  const validateUsername = (username) => {
    if (!username) {
      setUsernameError("Veuillez entrer un nom d'utilisateur");
      return false;
    }
    setUsernameError("");
    return true;
  };
  console.log(error);
  return (
    <ScrollView>
      <AuthForm
        textAuth="Sign In"
        welcomeText="Je m'appelle Groot et toi"
        handleSubmit={() => handleSignUp()}
        textBouton="Register"
        navigation={navigation}
        redirectScreen="SignIn"
      >
        <InputForm
          icon="user"
          placeholder="Username"
          onChangeText={(text) => {
            setUsername(text);
            validateUsername(text);
          }}
          value={username}
        />
        {usernameError ? (
          <Text style={{ color: "red", marginTop: -20, marginLeft: 10 }}>
            {usernameError}
          </Text>
        ) : null}

        <InputForm
          icon="user"
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text);
          }}
          value={email}
        />
        {emailError ? (
          <Text style={{ color: "red", marginTop: -20, marginLeft: 10 }}>
            {emailError}
          </Text>
        ) : null}

        <LocationPicker
          selectedLocation={selectedLocation}
          setSelectedLocation={(location) => {
            setSelectedLocation(location);
            validateSelectedLocation(location);
          }}
        />
        {selectedLocationError ? (
          <Text style={{ color: "red", marginTop: -20, marginLeft: 10 }}>
            {selectedLocationError}
          </Text>
        ) : null}

        <InputForm
          icon="lock"
          placeholder="Password"
          onChangeText={(text) => {
            setPassword(text);
            validatePassword(text);
          }}
          value={password}
          secureText
        />
        {passwordError ? (
          <Text style={{ color: "red", marginTop: -20, marginLeft: 10 }}>
            {passwordError}
          </Text>
        ) : null}
      </AuthForm>
      {error ? (
        <Text
          style={{
            color: "red",
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          {error}
        </Text>
      ) : null}
    </ScrollView>
  );
};

export default SignupScreen;
