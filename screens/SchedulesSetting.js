import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AlarmContainer from "../components/AlarmContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Time = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.time}
      locations={[0, 1]}
      colors={["#eef0f5", "#e2e4ea"]}
    >
      <Image
        style={styles.addBtnIcon}
        resizeMode="cover"
        source={require("../assets/add-btn.png")}
      />
      <View style={styles.alarm3}>
        <LinearGradient
          style={[styles.bg, styles.bgShadowBox]}
          locations={[0, 1, 1]}
          colors={["#eef0f5", "#e6e9ef", "#e6e9ef"]}
        />
        <View style={styles.dSwitch}>
          <View style={styles.switchBody}>
            <View style={[styles.switchBody1, styles.bg1Position]}>
              <View style={[styles.switchBody2, styles.switchPosition]} />
            </View>
          </View>
          <Image
            style={[styles.switchIcon, styles.switchIconLayout]}
            resizeMode="cover"
            source={require("../assets/switch.png")}
          />
        </View>
        <Text style={[styles.lMMContainer, styles.containerTypo]}>
          <Text style={styles.lMMContainer1}>
            <Text style={styles.lMM}>{`L M M `}</Text>
            <Text style={styles.j}>J</Text>
            <Text style={styles.lMM}> V S</Text>
            <Text style={styles.j}> D</Text>
          </Text>
        </Text>
        <Text style={[styles.text, styles.textTypo1]}>08:40</Text>
        <Text style={[styles.text1, styles.textTypo1]}>07:30</Text>
        <Text style={[styles.sortie1, styles.sortiePosition]}>sortie3</Text>
      </View>
      <View style={styles.alarm2}>
        <LinearGradient
          style={[styles.bg1, styles.bg1Position]}
          locations={[0, 1, 1]}
          colors={["#eef0f5", "#e6e9ef", "#e6e9ef"]}
        />
        <View style={styles.dSwitch}>
          <View style={styles.switchBody}>
            <View style={[styles.switchBody1, styles.bg1Position]}>
              <View style={[styles.switchBody5, styles.switchPosition]} />
            </View>
          </View>
          <Image
            style={[styles.switchIcon1, styles.switchIconLayout]}
            resizeMode="cover"
            source={require("../assets/switch.png")}
          />
        </View>
        <Text style={[styles.lMMContainer2, styles.containerTypo]}>
          <Text style={styles.lMMContainer1}>
            <Text style={styles.lMM}>{`L M `}</Text>
            <Text style={styles.j}>M</Text>
            <Text style={styles.lMM}> J V S</Text>
            <Text style={styles.j}>{` `}</Text>
            <Text style={styles.lMM}>D</Text>
          </Text>
        </Text>
        <Text style={[styles.text3, styles.textTypo]}>08:00</Text>
        <Text style={[styles.sortie2, styles.textTypo]}>sortie2</Text>
        <Text style={[styles.text4, styles.textTypo]}>09:00</Text>
      </View>
      <AlarmContainer />
      <Text style={[styles.rglage, styles.textTypo1]}>Réglages</Text>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Setting")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bgShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(255, 255, 255, 0.53)",
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 109,
    },
  },
  bg1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  switchPosition: {
    borderRadius: Border.br_31xl,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  switchIconLayout: {
    height: 33,
    width: 34,
  },
  containerTypo: {
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.darkGrey,
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  sortiePosition: {
    left: "5.31%",
    top: "0%",
  },
  textTypo: {
    opacity: 0.42,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    color: Color.darkGrey,
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  addBtnIcon: {
    top: 558,
    left: 120,
    width: 108,
    height: 108,
    position: "absolute",
  },
  bg: {
    height: "68.01%",
    width: "102.19%",
    top: "31.63%",
    bottom: "0.35%",
    left: "-2.19%",
    right: "0%",
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(255, 255, 255, 0.53)",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  switchBody2: {
    backgroundColor: "#a7d622",
  },
  switchBody1: {
    top: "0%",
    bottom: "0%",
    height: "100%",
  },
  switchBody: {
    height: 27,
    width: 58,
  },
  switchIcon: {
    marginLeft: -25,
  },
  dSwitch: {
    top: 71,
    left: 252,
    alignItems: "center",
    height: 27,
    width: 58,
    position: "absolute",
    flexDirection: "row",
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
  },
  text: {
    left: "24.69%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "56.15%",
    width: "16.56%",
    height: "23.73%",
  },
  text1: {
    left: "2.81%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "56.15%",
    width: "16.56%",
    height: "23.73%",
  },
  sortie1: {
    height: "25.31%",
    width: "24.69%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.darkGrey,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    fontSize: FontSize.size_lg,
  },
  alarm3: {
    top: 413,
    left: 24,
    width: 320,
    height: 126,
    position: "absolute",
  },
  bg1: {
    height: "67.3%",
    top: "32.7%",
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(255, 255, 255, 0.53)",
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 109,
    },
  },
  switchBody5: {
    backgroundColor: "#dedfda",
  },
  switchIcon1: {
    marginLeft: -55,
  },
  lMMContainer2: {
    height: "8.97%",
    width: "43.13%",
    top: "64.84%",
    left: "28.44%",
    opacity: 0.5,
  },
  text3: {
    left: "5.2%",
    top: "56.25%",
    width: "16.88%",
    height: "26.47%",
    opacity: 0.42,
  },
  sortie2: {
    height: "23.36%",
    width: "23.13%",
    left: "5.31%",
    top: "0%",
  },
  text4: {
    left: "25.99%",
    top: "56.25%",
    width: "16.88%",
    height: "26.47%",
    opacity: 0.42,
  },
  alarm2: {
    top: 255,
    left: 20,
    width: 327,
    height: 128,
    position: "absolute",
  },
  rglage: {
    height: "6.79%",
    width: "53.61%",
    top: "5.13%",
    left: "21.67%",
    fontSize: FontSize.size_13xl,
    letterSpacing: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    left: 0,
    top: 28,
    width: 91,
    height: 96,
    position: "absolute",
  },
  time: {
    shadowColor: "rgba(35, 40, 45, 0.2)",
    shadowRadius: 85,
    elevation: 85,
    flex: 1,
    height: 780,
    backgroundColor: "transparent",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 109,
    },
    width: "100%",
  },
});

export default Time;