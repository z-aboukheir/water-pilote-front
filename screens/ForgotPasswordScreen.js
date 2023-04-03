import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InputForm from '../components/InputForm';
import AuthForm from '../components/AuthForm';


const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // Handle sign up logic here
    };


    return (
        <AuthForm textAuth="Sign In" welcomeText="Entrez votre adresse e-mail" handleSubmit={handleSubmit} textBouton="Envoyer">
            <InputForm
                icon='user'
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
           </AuthForm>
    )
}


export default ForgotPasswordScreen;
