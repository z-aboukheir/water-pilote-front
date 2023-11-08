import React from "react";
import {
  Modal,
  Text,
  TextInput,
  View,
  Pressable,
  StyleSheet,
  useWindowDimensions,

} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ModalValveScreen = ({
  setModalVisible,
  valveName,
  setValveName,
  valvePinPosition,
  setValvePinPosition,
  addValve,
}) => {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const screenWidth = windowWidth * 0.8; // 80% de la largeur de la fenêtre
  const screenHeight = windowHeight * 0.5;
  

   const  handleValidate= () => { 
        addValve() 
        // setModalVisible(false);
    }

  return (
    <View style={[styles.container]}>
          <View style={[styles.modalContainer]}>

        <View style={[styles.modalContent, {width: screenWidth, height: screenHeight}]}>
          <Text style={styles.modalTitle}>Ajouter une Valve</Text>
          <TextInput
            placeholder="Nom de la valve"
            value={valveName}
            onChangeText={setValveName}
            style={styles.inputField}
          />
          <TextInput
            inputMode="numeric"
            placeholder="Position du pin de la valve"
            value={valvePinPosition}
            onChangeText={(text) => {
              if (!isNaN(text)) {
                setValvePinPosition(text);
              }
            }}
            style={styles.inputField}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={[
                styles.button,
                { backgroundColor: "#BCC604", marginRight: 10 },
              ]}
              onPress={() => {
                handleValidate()
              }}
            >
              <Text style={styles.buttonText}>Enregistrer</Text>
            </Pressable>

            <Pressable
              style={[
                styles.button,
                { backgroundColor: Color.darkGrey, marginLeft: 10, opacity:0.8},
              ]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Annuler</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 20,
    shadowOffset: { width: 10, height: 10 }, // Ombre pour effet de parallaxe
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
   gap: 20  ,
   maxWidth:700,
  justifyContent : "center"
  },
  modalTitle: {
    marginBottom: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily : FontFamily.poppinsMedium,
    color: Color.darkGrey
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 10,
    fontFamily : FontFamily.poppinsRegular
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    elevation: 3, // Ombre pour Android
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily : FontFamily.poppinsMedium
  },
});

export default ModalValveScreen;
