import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={styles.tabNavIcon}
        resizeMode="cover"
        source={require("../assets/tab-nav.png")}
      />
      <View style={styles.arrosage}>
        <View style={[styles.rectangle, styles.rectangleLayout2]} />
        <View style={[styles.rectangle1, styles.rectangleLayout1]} />
        <Text style={[styles.text, styles.textTypo]}>20:00</Text>
        <Text style={[styles.prochainArrosage, styles.textTypo]}>
          prochain arrosage
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.humidit, styles.rectangleLayout]}>
        <View style={[styles.rectangle2, styles.rectangleLayout]} />
        <View style={[styles.rectangle3, styles.rectangleLayout]} />
        <Text style={[styles.text1, styles.text1Typo]}>76 %</Text>
        <Text style={[styles.lhumiditDuSol, styles.text1Typo]}>
          L'humidité du sol
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.apercu, styles.apercuLayout]}>
        <View style={[styles.apercuChild, styles.apercuLayout]} />
        <Text style={[styles.lyon, styles.lyonFlexBox]}>LYON</Text>
        <Text style={[styles.text2, styles.lyonFlexBox]}>35°</Text>
      </View>
      <Image
        style={styles.roundSocialNotifications}
        resizeMode="cover"
        source={require("../assets/-round--social--notifications-none.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout2: {
    height: 56,
    position: "absolute",
  },
  rectangleLayout1: {
    width: 258,
    left: 0,
    top: 0,
    backgroundColor: Color.aliceblue_100,
    borderRadius: Border.br_xl,
  },
  textTypo: {
    textAlign: "left",
    color: Color.steelblue_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 55,
    position: "absolute",
  },
  text1Typo: {
    height: 24,
    textAlign: "left",
    color: Color.steelblue_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  apercuLayout: {
    height: 391,
    width: 319,
    position: "absolute",
  },
  lyonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    width: "60.5%",
    height: "13.55%",
    position: "absolute",
  },
  tabNavIcon: {
    width: "96.53%",
    top: 680,
    right: "0%",
    left: "3.47%",
    height: 132,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    top: 1,
    left: 272,
    width: 76,
    backgroundColor: Color.aliceblue_100,
    borderRadius: Border.br_xl,
    height: 56,
  },
  rectangle1: {
    height: 56,
    position: "absolute",
  },
  text: {
    top: 17,
    width: 60,
    left: 289,
  },
  prochainArrosage: {
    left: 68,
    width: 217,
    top: 16,
  },
  vectorIcon: {
    height: "63.16%",
    width: "10.32%",
    top: "17.54%",
    right: "84.81%",
    bottom: "19.3%",
    left: "4.87%",
  },
  arrosage: {
    top: 625,
    width: 349,
    height: 57,
    left: 18,
    position: "absolute",
  },
  rectangle2: {
    left: 266,
    width: 79,
    top: 0,
    height: 55,
    backgroundColor: Color.aliceblue_100,
    borderRadius: Border.br_xl,
  },
  rectangle3: {
    width: 258,
    left: 0,
    top: 0,
    backgroundColor: Color.aliceblue_100,
    borderRadius: Border.br_xl,
  },
  text1: {
    width: 53,
    top: 16,
    left: 289,
  },
  lhumiditDuSol: {
    top: 15,
    left: 65,
    width: 222,
  },
  vectorIcon1: {
    height: "56.36%",
    width: "9.86%",
    top: "16.36%",
    right: "84.92%",
    bottom: "27.27%",
    left: "5.22%",
  },
  humidit: {
    top: 528,
    width: 345,
    left: 18,
  },
  apercuChild: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.whitesmoke_200,
    shadowColor: "rgba(216, 216, 219, 0.2)",
    shadowRadius: 10,
    elevation: 10,
    left: 0,
    height: 391,
    width: 319,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 50,
      height: 80,
    },
  },
  lyon: {
    top: "64.71%",
    left: "15.05%",
    fontSize: 40,
    letterSpacing: 1.2,
    color: "#676d79",
  },
  text2: {
    top: "78.26%",
    left: "16.93%",
    fontSize: 36,
    letterSpacing: 1.1,
    color: Color.darkGrey,
  },
  apercu: {
    top: 100,
    left: 35,
  },
  roundSocialNotifications: {
    top: 8,
    left: 285,
    width: 90,
    height: 96,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.18)",
    shadowRadius: 80,
    elevation: 80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 50,
      height: 80,
    },
  },
});

export default Home;