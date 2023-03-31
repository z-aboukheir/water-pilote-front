import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const InputForm = ({ icon, placeholder, onChangeText, value, secureTextEntry }) => {
    return (
        <View
            style={styles.container}>
            <Icon name={icon} size={20} color="#E8E8E8" style={styles.icon} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"#D9D9D9"}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                style={styles.textInput}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 36,
        shadowColor: '#9f9f9f',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 24,
        elevation: 5,
        padding: 10,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 10,
        verticalAlign: "middle",
        opacity: 0.40
    }
    ,
    textInput: {
        flex: 1,
        fontSize: 20,
    }

});


export default InputForm;
