import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DSwitch from "./DSwitch";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AlarmContainer = () => {
  return (
    <View style={styles.alarm1}>
      <LinearGradient
        style={styles.bg}
        locations={[0, 1, 1]}
        colors={["#eef0f5", "#e6e9ef", "#e6e9ef"]}
      />
      <DSwitch />
      <Text style={styles.lMMContainer}>
        <Text style={styles.lMMContainer1}>
          <Text style={styles.lMM}>{`L M M `}</Text>
          <Text style={styles.j}>J</Text>
          <Text style={styles.lMM}> V S</Text>
          <Text style={styles.j}> D</Text>
        </Text>
      </Text>
      <Text style={[styles.text, styles.textTypo]}>08:40</Text>
      <Text style={[styles.text1, styles.textTypo]}>07:30</Text>
      <Text style={[styles.sortie1, styles.textTypo]}>sortie1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    color: Color.darkGrey,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  bg: {
    height: "68.01%",
    width: "102.19%",
    top: "31.63%",
    right: "0%",
    bottom: "0.35%",
    left: "-2.19%",
    borderRadius: Border.br_xl,
    shadowColor: "rgba(255, 255, 255, 0.53)",
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    position: "absolute",
  },
  lMM: {
    color: Color.darkGrey,
  },
  j: {
    color: Color.red,
  },
  lMMContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  lMMContainer: {
    height: "9.49%",
    width: "26.25%",
    top: "63.27%",
    left: "45%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.4,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "right",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  text: {
    left: "24.69%",
    top: "56.15%",
    width: "16.56%",
    height: "23.73%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  text1: {
    left: "2.81%",
    top: "56.15%",
    width: "16.56%",
    height: "23.73%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  sortie1: {
    height: "25.31%",
    width: "24.69%",
    top: "0%",
    left: "5.31%",
  },
  alarm1: {
    top: 111,
    left: 24,
    width: 320,
    height: 126,
    position: "absolute",
  },
});

export default AlarmContainer;