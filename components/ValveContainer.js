import React, { useEffect, useState, useRef } from "react";
import {
  Image,
  Pressable,
  View,
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions, 
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";


const ValveContainer = (props) => {
  const {height, width, scale, fontScale} = useWindowDimensions();

   // Creation d'un style conditionnel en fonction des dimensions de la fenêtre
   const buttonStyle = {
    ...styles.button,
    width:  width * 0.12,
    height: height * 0.12,
  };

  const iconStyle = {
    ...styles.icon,
    width:  width * 0.12,
    height: height * 0.12,
  };

   // width:  width * 0.8,
    // height: height * 0.7,
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
const inputRef = useRef(null);

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
 // Donnez le focus au TextInput après avoir défini l'état
    // Utilisez un setTimeout pour s'assurer que l'état est mis à jour avant de donner le focus
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };
  // Fonction pour gérer la validation de la modification du nom
  const handleValidateName = () => {
    setIsEditingName(false);
    //  mettre à jour la nom dans votre base de données
    if (tempName !== name) updateValve(valveId, tempName);
  };

    // Fonction pour fermer l'édition lorsque l'on clique en dehors
    const closeEdit = () => {
      setIsEditingName(false);
      if (tempName !== name) updateValve(valveId, tempName);
    };

  return (
    <View style={[styles.container]}>
      <View style={{ alignItems: "center", flexDirection: "row", width: "100%" }}>
        <View style={{flexDirection: "row", justifyContent:'flex-start' , alignItems: "center", flex: 1 , }}>
        {isEditingName ? (
          <TextInput
          ref={inputRef}
            style={[
              styles.valveName,
              { borderWidth: 1, borderRadius: 5, borderColor: "#ccc" },
            ]}
            value={tempName}
            onChangeText={setTempName}
            onBlur={closeEdit}
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
        </View>
      
        <Pressable
          style={[styles.deleteButton]}
          onPress={onDelete}
        >
          <Text style={styles.deleteButtonText}>X</Text>
        </Pressable>
      </View>
      <View style={styles.outputContainer}>
        <Pressable style={[buttonStyle]} onPress={onPressWatering}>
          <Image
            style={iconStyle}
            source={require("../assets/icone-reglage.png")}
          />
        </Pressable>

        <Pressable style={buttonStyle} onPress={onPressSchedule}>
          <Image
            style={iconStyle}
            source={require("../assets/iconetime.png")}
          />
        </Pressable>

        <Pressable
          style={[
            buttonStyle,
            isAutomatic === 1 ? styles.disabledButton : null,
          ]}
          onPress={onPressSplash}
          disabled={isAutomatic === 1}
        >
          <Image
            style={iconStyle}
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
    paddingTop: 10,
    paddingRight: 10,
    alignItems : "center"
  },
  outputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 10,
  },
  valveName: {
    fontSize: FontSize.size_lg,
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
    marginHorizontal: 5,
    backgroundColor: "v",
    alignItems: "center",
    justifyContent: "center",    
    maxWidth: 53,
    minWidth: 43,
    maxHeight: 55,
    minHeight: 40,
  },
  icon: {
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
  },
  buttonActive: {
    backgroundColor: '#6fa5d9ff',
    // backgroundColor: Color.steelblue_200,
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  buttonInactive: {
    marginHorizontal: 5,
    color: "Color.steelblue_200",
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
    opacity:0.7,
  },
  deleteButton: {
    borderWidth: 1,
    borderRadius: 25,
    // borderColor: "transparent",
    borderColor: Color.darkGrey,
    // borderColor: Color.lightslategray,
    width: 35,
    height: 34,
    // marginLeft: 25,
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
    marginRight:15, 
  },
  deleteButtonText: {
    color: Color.white,
    fontSize: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "bold",
  },
  updateButton: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: Color.darkGrey,
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
    // fontFamily: FontFamily.poppinsMedium,
    width: 15,
    height: 15,
  },
});
