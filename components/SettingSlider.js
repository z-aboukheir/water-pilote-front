import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
} from "react-native";
import Slider
    from "@react-native-community/slider";
    import {
        Color,
        FontFamily,
        FontSize
    } from "../GlobalStyles";

const SettingSlider = (props) => {
    const {name, setValue, value, unit} = props;
  return (
    <>
        <Text style={{fontFamily: FontFamily.poppinsMedium}}>{name}</Text>
        <View style={styles.infoContainer}>
            <View>
                <Slider
                    style={{width: 250, height: 100}}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor="#BCC604"
                    maximumTrackTintColor="grey"
                    thumbTintColor={"#BCC604"}
                    onValueChange={(newValue) => setValue(Math.round(newValue))}
                    value={Math.round(value)}
                />
            </View>
            <View style={{flexDirection: "row", marginLeft:8, alignItems:'center'}}>
                <TextInput
                    style={[styles.textInputValue]}
                    onChangeText={(newValue) => {
                        const parsedValue = parseInt(newValue);
                        if (!isNaN(parsedValue)) {
                            setValue(parsedValue);
                        } else {
                            setValue(0);
                        }
                    }}
                    value={value?.toString() ?? ''}
                    inputMode="numeric"
                />
                <Text> {unit}</Text>
            </View>
        </View>
    </>
  )
}

export default SettingSlider

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        height: 40,
        marginBottom: 30,
        alignItems: 'center',
    }
,
textInputValue : {
    width : 25,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Color.darkGrey,
    backgroundColor: "white",
    padding : 8
}

})


