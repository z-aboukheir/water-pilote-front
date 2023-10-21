import React, {
    useEffect,
    useState
} from 'react'
import { Image, Pressable, View, Text, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ValveContainer = (props) => {
    const {name, onPressWatering, onPressSchedule, isAutomatic} = props;
    const [mode, setMode] = useState(isAutomatic ? 'auto' : 'manual');

    const handlePressAuto = () => setMode('auto');
    const handlePressManual = () => setMode('manual');

    // initialisation du mode auto ou manuel en fonction de la valeur de isAutomatic
    useEffect(() => {
        setMode(isAutomatic ? 'auto' : 'manual');
    }, [isAutomatic]);

    function onPressSplash() {
        console.log('arrosage manuel en cours');
    }

    return (
      <View style={styles.container}>

          <Text style={styles.valveName}>{name}</Text>

          <View style={styles.outputContainer}>
              <Pressable style={styles.button} onPress={onPressWatering}>
                  <Image style={styles.icon} source={require("../assets/icone-reglage.png")}/>
              </Pressable>

              <Pressable style={styles.button}  onPress={onPressSchedule}>
                  <Image style={styles.icon} source={require("../assets/iconetime.png")}/>
              </Pressable>

              <Pressable
                  style={[styles.button, isAutomatic === 1 ? styles.disabledButton : null]}
                  onPress={onPressSplash}
                  disabled={isAutomatic === 1}
              >
                  <Image style={styles.icon} source={require("../assets/icon-splash.png")} />
              </Pressable>


              <View style={styles.switchMode}>
                  <Pressable style={mode === 'auto' ? styles.buttonActive : styles.buttonInactive} onPress={handlePressAuto}>
                      <Text style={mode === 'auto' ? styles.buttonText : styles.buttonTextInactive}>Auto</Text>
                  </Pressable>

                  <Pressable style={mode === 'manual' ? styles.buttonActive : styles.buttonInactive} onPress={handlePressManual}>
                      <Text style={mode === 'manual' ? styles.buttonText : styles.buttonTextInactive}>Manuel</Text>
                  </Pressable>
              </View>

          </View>
      </View>
  )
}

export default ValveContainer

const styles = StyleSheet.create({
    container: {
        // alignSelf: "left",
        paddingTop: 10,
        paddingRight: 10
    },
    outputContainer: {
        flexDirection: "row",
    },
    valveName: {
        fontSize: FontSize.size_lg,
        textAlign: "left",
        color: Color.darkGrey,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        paddingTop: 35,
        paddingBottom: 20,
        marginLeft: 6,
    },
    button: {
        borderWidth: 2,
        borderRadius: 17,
        borderColor: Color.lightslategray,
        padding: 6,
        width: 50,
        height: 50,
        marginHorizontal: 5,
        backgroundColor: Color.whitesmoke_300,
    },
    icon: {
        width: 34,
        height: 34,
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
        marginLeft: 10,
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
        backgroundColor: Color.steelblue_100,
        opacity: 0.7,
    },

})