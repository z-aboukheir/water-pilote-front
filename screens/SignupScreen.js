import React, { useState, useContext } from "react";
import InputForm from "../components/InputForm";
import AuthForm from "../components/AuthForm";
import LocationPicker from "../components/LocationPicker";
import CheckBox from "expo-checkbox";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

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
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState("");

  const navigation = useNavigation();
  const { signUp } = useContext(AuthContext);

  const handleSignUp = async () => {
    if (
      !termsError && // vérifier que l'utilisateur a accepté les termes
      //si aucune erreur n'est detectée sur l'un des champs alors l'on soumet le formulaire
      !usernameError &&
      !emailError &&
      !passwordError &&
      !selectedLocationError &&
      areAllFieldsFilled() // si l'utilisateur n'as pas encore commencé la saisie et soumet sont formulaire, un message l'avertir de remplir tous les champs
    ) {
      setError("");
      try {
        await signUp({
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
    }
    // tant qu'une erreur est detecté le formulaire ne peut etre soumis
    else {
      validateUsername(username);
      validatePassword(password);
      validateEmail(email);
      validateSelectedLocation(selectedLocation);
      validateTerms(termsAccepted);
      setError(
        "Veuillez remplir correctement tous les champs pour vous inscrire."
      );
    }
  };

  const validateTerms = (termsAccepted) => {
    if (!termsAccepted) {
      setTermsError(
        "Vous devez accepter les termes d'utilisation pour continuer."
      );
      return false;
    }
    setTermsError("");
    return true;
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
    const regex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

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

  return (
    <ScrollView>
      <AuthForm
        textAuth="Se connecter"
        welcomeText="Je m'appelle Waterpilot et toi ?"
        handleSubmit={() => handleSignUp()}
        textBouton="S'incrire"
        navigation={navigation}
        redirectScreen="SignIn"
      >
        <InputForm
          icon="user"
          placeholder="Nom"
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
        {/* Section pour l'acceptation des termes et conditions */}
        <View style={styles.termsContainer}>
          <CheckBox
            value={termsAccepted}
            onValueChange={(newValue) => {
              setTermsAccepted(newValue);
              validateTerms(newValue);
            }}
            style={styles.checkbox}
          />
          <View style={{flex : 1}}>
            <Text style={styles.label}>
              J'ai lu et accepté la
              <Text style={styles.link}> Politique de Confidentialité</Text>, la
              <Text style={styles.link}> Licence de Logiciel</Text>, et les
              <Text style={styles.link}> Conditions d'utilisation</Text>.
            </Text>
          </View>
        </View>
        {termsError ? (
          <Text style={{ color: "red", marginTop: -30, marginLeft: 7 }}>
            {termsError}
          </Text>
        ) : null}
      </AuthForm>
      {error ? (
        <Text
          style={{
            color: "red",
            textAlign: "center",
            marginTop: -20,
            marginHorizontal: 20,
            marginBottom: 50,
          }}
        >
          {error}
        </Text>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    margin: 8,
    fontSize: 10,
    fontFamily: FontFamily.poppinsMedium
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default SignupScreen;
