import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
} from "react-native";
import Slider
    from "@react-native-community/slider";

const SettingSlider = (props) => {
    const {name, setValue, value, unit} = props;
  return (
    <>
        <Text>{name}</Text>
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
            <View style={{flexDirection: "row", marginLeft:20}}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(newValue) => {
                        const parsedValue = parseInt(newValue);
                        if (!isNaN(parsedValue)) {
                            setValue(parsedValue);
                        } else {
                            setValue(0);
                        }
                    }}
                    value={value?.toString() ?? ''}
                    keyboardType="numeric"
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
})