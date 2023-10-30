import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Color, FontSize } from "../GlobalStyles";

const AuthForm = ({
  textAuth,
  welcomeText,
  children,
  handleSubmit,
  textBouton,
  navigation,
  redirectScreen,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTextAuth}>
      <Pressable onPress={() => navigation.navigate(redirectScreen)}>
        <Text style={styles.textAuth}>{textAuth}</Text>
        </Pressable>
        <Image source={require("../assets/On.png")} style={styles.imageOn} />
      </View>
      <Image
        source={require("../assets/robot.png")}
        style={styles.imageRobot}
      />
      <Text style={styles.welcomeText}>{welcomeText}</Text>
      <View style={styles.containerForm}>
        {children}
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{textBouton}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  containerTextAuth: {
    justifyContent: "flex-end",
    marginBottom: 50,
    flexDirection: "row",
  },
  textAuth: {
    textDecorationLine: "underline",
    fontSize: 25,
    color: Color.dimgray_100,
    textShadowColor: "#00000040",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 5,
  },

  imageOn: {
    position: "relative",
    width: 40,
    height: 40,
  },

  containerForm: {
    gap: 30,
    alignItems: "stretch",
  },

  imageRobot: {
    position: "relative",
    width: 140,
    height: 140,
    alignSelf: "center",
  },

  welcomeText: {
    fontSize: 20,
    color: "#7A7272",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor:Color.darkturquoise,
    borderRadius: 36,
    shadowColor: "#9f9f9f",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 5,
    padding: 15,
    flexDirection: "row",
    marginTop: 25,
  },
  buttonText: {
    fontSize: FontSize.size_lg,
    color: Color.white,
    textAlign: "center",
    flex: 1,
  },
});

export default AuthForm;