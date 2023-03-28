import React from 'react';
import { View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const InputForm = ({ icon, placeholder, onChangeText, value, secureTextEntry }) => {
    return (
        <View
            style={{
                backgroundColor: 'white',
                borderRadius: 23,
                shadowColor: 'rgba(136, 160, 183, 0.25)',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.40,
                shadowRadius: 4,
                elevation: 12,
                padding: 10,
                flexDirection: 'row',
            }}>
                
                <Icon name={icon} size={20} color="#687891"  style={{
                    marginRight: 10 ,  verticalAlign: "middle", opacity: 0.40
                }}  />

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"##687891"}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                style={{
                    opacity: 0.40
                }}
            />
        </View>
    );
};

export default InputForm;
