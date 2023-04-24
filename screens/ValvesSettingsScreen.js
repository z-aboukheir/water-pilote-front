import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import ConfigContainer from "../components/ConfigContainer";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const ValvesSettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setting}>
{/*      <Image
        style={[styles.plante1Icon, styles.backPosition]}
        resizeMode="cover"
        source={require("../assets/plante-1.png")}
      />
      <ConfigContainer
        rectangle11Top={601}
        rectangle11Left={33}
        onIconetimePress={() => navigation.navigate("Time")}
      />
      <Text style={[styles.sortie3, styles.sortieTypo]}>sortie3</Text>
      <ConfigContainer
        rectangle11Top={449}
        rectangle11Left={29}
        onIconetimePress={() => navigation.navigate("Time")}
      />
      <Text style={[styles.sortie2, styles.sortieTypo]}>sortie2</Text>
      <ConfigContainer
        rectangle11Top={284}
        rectangle11Left={20}
        onIconetimePress={() => navigation.navigate("Time")}
      />
      <Text style={[styles.sortie1, styles.sortieTypo]}>sortie1</Text>
      <Pressable
        style={[styles.back, styles.backPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Text style={styles.paramtrage}>Paramétrage</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  backPosition: {
    left: 0,
    position: "absolute",
  },
  sortieTypo: {
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  plante1Icon: {
    top: 29,
    width: 607,
    height: 766,
  },
  sortie3: {
    width: "17.6%",
    top: "66.87%",
    left: "6.93%",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_lg,
    height: "3.69%",
  },
  sortie2: {
    width: "19.73%",
    top: "48.15%",
    left: "6.13%",
    opacity: 0.42,
    height: "3.69%",
  },
  sortie1: {
    height: "3.94%",
    width: "21.07%",
    top: "29.68%",
    left: "6.93%",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_lg,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    top: 28,
    width: 91,
    height: 96,
  },
  paramtrage: {
    top: 50,
    left: 84,
    fontSize: FontSize.size_13xl,
    letterSpacing: 1,
    width: 267,
    height: 70,
    textAlign: "left",
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  setting: {
    backgroundColor: Color.whitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.18)",
    shadowOffset: {
      width: 50,
      height: 80,
    },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ValvesSettingsScreen;