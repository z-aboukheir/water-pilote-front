import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Oups! Connexion impossible. Veuillez réessayer plus tard.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:
    {
       
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    }
})

export default ErrorScreen;
