import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

import CurrentWeather
  from "../components/CurrentWeather";
import {
  LogoutButton
} from "../components/LogoutButton";

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <LogoutButton />
      </View>
      <CurrentWeather />
      <View style={styles.infoContainer}>
        <Text style={styles.infoOne}>Humidité au sol</Text>
        <Text style={styles.infoTwo}>1%</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoOne}>Prochain arrosage</Text>
        <Text style={styles.infoTwo}>19h00</Text>
      </View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    mainContainer: {
      paddingTop: 70,
        paddingHorizontal: "10%",
        alignContent: "center",
    },
  infoContainer: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 30,
  },
  infoOne: {
    width: '75%',
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    paddingTop: 10,
  },
  infoTwo: {
    width: '20%',
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    marginLeft: "5%",
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    paddingTop: 10,
  }
})

