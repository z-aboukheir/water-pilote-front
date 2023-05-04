import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const InputForm = ({ icon, placeholder, onChangeText, onFocus, value, onBlur, secureText }) => {

    const [secureTextEntry, setSecureTextEntry] = useState(false);

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const handleFocus = () => {
        if (secureText) {
            setSecureTextEntry(true);
        }
       //onFocus();
    };

    return (
        <View
            style={styles.container}>
            <Icon name={icon} size={25} color="#D9D9D9" style={styles.icon} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"#D9D9D9"}
                onChangeText={onChangeText}
                value={value}
                style={styles.textInput}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
                onFocus={handleFocus}
            />
            {secureText && <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.button}>
                {secureTextEntry ? <Text>👁️</Text> : <Text>👁️‍🗨️</Text> }
            </TouchableOpacity>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 36,
        shadowColor: '#9f9f9f',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'   
    },
    icon: {
        marginRight: 10,
        opacity: 0.40
    }
    ,
    textInput: {
        fontSize: 20,
        flex: 1,      
    },
   

});


export default InputForm;