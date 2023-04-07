import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ConfigContainer = ({
  rectangle11Top,
  rectangle11Left,
  onIconetimePress,
}) => {
  const configStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangle11Top),
      ...getStyleValue("left", rectangle11Left),
    };
  }, [rectangle11Top, rectangle11Left]);

  return (
    <View style={[styles.config, configStyle]}>
      <View style={[styles.configChild, styles.configShadowBox]} />
      <Text style={[styles.auto, styles.manTypo]}>auto</Text>
      <View style={[styles.configItem, styles.configShadowBox]} />
      <Text style={[styles.man, styles.manTypo]}>manual</Text>
      <View style={styles.configInner} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/iconetime.png")}
      />
      <View style={[styles.rectangleView, styles.configChild1ShadowBox]} />
      <Pressable style={styles.iconetime} onPress={onIconetimePress}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector@3x.png")}
        />
      </Pressable>
      <View style={[styles.configChild1, styles.configChild1ShadowBox]} />
      <Image
        style={[styles.iconeReglage, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/icone-reglage.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  configShadowBox: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: Border.br_21xl,
    left: 189,
    top: 0,
    height: 54,
    position: "absolute",
  },
  manTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 14,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "24.07%",
    overflow: "hidden",
    position: "absolute",
  },
  configChild1ShadowBox: {
    top: 2,
    height: 50,
    width: 50,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(216, 216, 219, 0.2)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: Color.whitesmoke_200,
    position: "absolute",
  },
  configChild: {
    shadowColor: "rgba(255, 255, 255, 0.3)",
    width: 153,
    backgroundColor: Color.whitesmoke_200,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: Border.br_21xl,
    left: 189,
    top: 0,
  },
  auto: {
    left: 287,
    color: Color.lightsteelblue,
    width: 63,
    
  },
  configItem: {
    backgroundColor: Color.steelblue_100,
    shadowColor: "rgba(176, 182, 204, 0.3)",
    width: 87,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: Border.br_21xl,
    left: 189,
    top: 0,
  },
  man: {
    left: 201,
    color: Color.white,
    width: 78,
    height: 24,
  },
  configInner: {
    top: 3,
    left: 128,
    height: 50,
    width: 50,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(216, 216, 219, 0.2)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: Color.whitesmoke_200,
    position: "absolute",
  },
  vectorIcon: {
    height: "53.7%",
    width: "8.29%",
    right: "52%",
    bottom: "22.22%",
    left: "39.71%",
  },
  rectangleView: {
    left: 64,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconetime: {
    left: 71,
    top: 9,
    width: 34,
    height: 34,
    position: "absolute",
  },
  configChild1: {
    left: 0,
  },
  iconeReglage: {
    height: "52.74%",
    width: "8.57%",
    right: "88.57%",
    bottom: "23.18%",
    left: "2.86%",
  },
  config: {
    top: 601,
    left: 33,
    width: 350,
    height: 54,
    position: "absolute",
  },
});

export default ConfigContainer;