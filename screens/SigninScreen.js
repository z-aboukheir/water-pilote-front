import React, { useState, useContext } from "react";
import InputForm from "../components/InputForm";
import AuthForm from "../components/AuthForm";
import { ScrollView, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      await signIn(password, email);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <ScrollView>
      <AuthForm
        textAuth="S'incrire"
        welcomeText="Heureux de vous revoir !"
        handleSubmit={() => handleSignIn()}
        textBouton="Se connecter"
        navigation={navigation}
        redirectScreen="SignUp"
      >
        <InputForm
          icon="user"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <InputForm
          icon="lock"
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureText
        />
        <Text style={{ color: "black", textAlign: "center", marginTop: 10, fontFamily: FontFamily.poppinsRegular }}>
          Mot de passe oublié ?
        </Text>
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

export default SigninScreen;
