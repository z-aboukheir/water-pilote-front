import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions
} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ValveContainer = (props) => {
  const {
    name,
    onPressWatering,
    onPressSchedule,
    isAutomatic,
    onDelete,
    updateValve,
    valveId,
  } = props;
  const [mode, setMode] = useState(isAutomatic ? "auto" : "manual");

  const handlePressAuto = () => setMode("auto");
  const handlePressManual = () => setMode("manual");

  // État pour savoir si le nom est en cours de modification
  const [isEditingName, setIsEditingName] = useState(false);

  // État pour stocker la valeur temporaire du nom pendant la modification
  const [tempName, setTempName] = useState(name);

  const validateImage = require("../assets/validate.png");
const crayonImage = require("../assets/crayon.png");

  // initialisation du mode auto ou manuel en fonction de la valeur de isAutomatic
  useEffect(() => {
    setMode(isAutomatic ? "auto" : "manual");
  }, [isAutomatic]);

  function onPressSplash() {
    console.log("arrosage manuel en cours");
  }

  // Fonction pour gérer le début de la modification du nom
  const handleEditName = () => {
    setIsEditingName(true);
  };

  // Fonction pour gérer la validation de la modification du nom
  const handleValidateName = () => {
    setIsEditingName(false);
    //  mettre à jour la nom dans votre base de données
    if (tempName !== name) updateValve(valveId, tempName);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {isEditingName ? (
          <TextInput
            style={[
              styles.valveName,
              { borderWidth: 1, borderRadius: 5, borderColor: "#ccc" },
            ]}
            value={tempName}
            onChangeText={setTempName}
          />
        ) : (
          <Text style={styles.valveName}>{name}</Text>
        )}
        <Pressable
          style={styles.updateButton}
          onPress={isEditingName ? handleValidateName : handleEditName}
        >
         <Image
  source={isEditingName ? validateImage : crayonImage}
  style={styles.updateButtonText}
/>
        </Pressable>
        <Pressable
          style={[styles.deleteButton]}
          onPress={onDelete}
        >
          <Text style={styles.deleteButtonText}>X</Text>
        </Pressable>
      </View>
      <View style={styles.outputContainer}>
        <Pressable style={styles.button} onPress={onPressWatering}>
          <Image
            style={styles.icon}
            source={require("../assets/icone-reglage.png")}
          />
        </Pressable>

        <Pressable style={styles.button} onPress={onPressSchedule}>
          <Image
            style={styles.icon}
            source={require("../assets/iconetime.png")}
          />
        </Pressable>

        <Pressable
          style={[
            styles.button,
            isAutomatic === 1 ? styles.disabledButton : null,
          ]}
          onPress={onPressSplash}
          disabled={isAutomatic === 1}
        >
          <Image
            style={styles.icon}
            source={require("../assets/icon-splash.png")}
          />
        </Pressable>

        <View style={styles.switchMode}>
          <Pressable
            style={
              mode === "auto" ? styles.buttonActive : styles.buttonInactive
            }
            onPress={() => handlePressAuto}
          >
            <Text
              style={
                mode === "auto" ? styles.buttonText : styles.buttonTextInactive
              }
            >
              Auto
            </Text>
          </Pressable>

          <Pressable
            style={
              mode === "manual" ? styles.buttonActive : styles.buttonInactive
            }
            onPress={() => handlePressManual}
          >
            <Text
              style={
                mode === "manual"
                  ? styles.buttonText
                  : styles.buttonTextInactive
              }
            >
              Manuel
            </Text>
          </Pressable>
        </View>
       
      </View>
    </View>
  );
};

export default ValveContainer;

const styles = StyleSheet.create({
  container: {
    // alignSelf: "left",
    paddingTop: 10,
    paddingRight: 10,
  },
  outputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
  },
  valveName: {
    fontSize: FontSize.size_lg,
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    marginVertical: 20,
    marginLeft: 5,
  },

  button: {
    borderWidth: 2,
    borderRadius: 17,
    borderColor: Color.lightslategray,
    padding: 6,
    // width: 50,
    // height: 50,
    marginHorizontal: 5,
    backgroundColor: Color.whitesmoke_300,
    alignItems: "center",
    justifyContent: "center",
    width:  windowWidth * 0.12,
    height: windowHeight * 0.12,
    maxWidth: 53,
    minWidth: 43,
    maxHeight: 55,
    minHeight: 40,
  },
  icon: {
    // minWidth: 14,
    // maxWidth : 34,
    // width: '100%',
    width:  windowWidth * 0.8,
    height: windowHeight * 0.7,
    maxWidth: 36,
    minWidth: 20,
    maxHeight: 33,
    minHeight: 20,
  },
  switchMode: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Color.lightslategray,
    borderRadius: 25,
    width: 150,
    height: 50,
    backgroundColor: Color.whitesmoke_100,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
    maxWidth: 164,
    minWidth: 135,
    maxHeight: 59,
    minHeight: 46,
    width:  windowWidth * 0.25,
    // height: "6hw",
    height: windowHeight * 0.10,
  },
  buttonActive: {
    backgroundColor: Color.steelblue_200,
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  buttonInactive: {
    marginHorizontal: 5,
    color: Color.steelblue_200,
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_base,
  },
  buttonTextInactive: {
    color: Color.steelblue_200,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_base,
  },
  disabledButton: {
    backgroundColor: Color.darkGrey,
    opacity: 0.7,
  },
  deleteButton: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Color.lightslategray,
    padding: 8,
    width: 35,
    height: 34,
    marginLeft: 25,
    marginHorizontal: 5,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginLeft: 5,
    marginRight:15
  },
  deleteButtonText: {
    color: Color.white,
    fontSize: FontSize.size_base + 2, // Augmentons légèrement la taille de la police
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "bold",
  },
  updateButton: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Color.lightslategray,
    padding: 8,
    width: 30,
    height: 30,
    marginHorizontal: 5,
    backgroundColor: Color.whitesmoke_100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginLeft: 15,
  },
  updateButtonText: {
    // fontSize: FontSize.size_base,
    // fontFamily: FontFamily.poppinsMedium,
    width: 15,
    height: 15,
  },
});
