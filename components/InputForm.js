import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../GlobalStyles';

Icon.loadFont();

const InputForm = ({ icon, placeholder, onChangeText, value, onBlur, secureText }) => {

    const [secureTextEntry, setSecureTextEntry] = useState(secureText || false);

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
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
            />
            {secureText && <Pressable onPress={ () =>toggleSecureTextEntry()} style={styles.button}>
                {secureTextEntry ? <Icon name="eye" size={20} color="#000" /> : <Icon name="eye-slash" size={20} color="#000" /> }
            </Pressable>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
        borderRadius: 36,
        shadowColor: '#9f9f9f',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center' ,  
    },
    icon: {
        marginRight: 10,
        opacity: 0.40
    }
    ,
    textInput: {
        fontSize: 20,
        flex: 1,   
        overflow : 'hidden'   
    },
   

});


export default InputForm;