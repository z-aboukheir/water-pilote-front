import React, { useState, useContext } from "react";
import InputForm from "../components/InputForm";
import AuthForm from "../components/AuthForm";
import { ScrollView, Text, View } from "react-native";


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
    <View>
      <AuthForm
        textAuth="Sign Up"
        welcomeText="Heureux de vous revoir"
        handleSubmit={() => handleSignIn()}
        textBouton="Sign In"
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
      </AuthForm>
      {error ? (
     <Text style={{ color: "red", textAlign: "center", marginTop: 20 }}>
       {error}
     </Text>
   ) : null}

    </View>
  );
};

export default SigninScreen;
