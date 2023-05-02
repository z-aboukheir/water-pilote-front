import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import AuthForm from '../components/AuthForm';
import { loginUser, isLoggedIn} from '../services/authService';
import { Text } from 'react-native';

const SigninScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');


    const handleSignIn = async () => {
        try {
            // await loginUser({ email, password });
            await loginUser({ email :email, password: password});
            const isConnected = isLoggedIn()
            if (isConnected) {
                // L'utilisateur est connecté
                console.log("connected")
            } else {
                // L'utilisateur n'est pas connecté
                setError('Failed to log in');
                console.log("bad")
            }
          } catch (error) {
            console.log(error.message)
            setError(error.message);
          }
    };


    return (
        <>
        {error && <Text>{error}</Text>}
        <AuthForm textAuth="Sign Up" welcomeText="Heureux de vous revoir" handleSubmit={handleSignIn} textBouton="Sign In">
            <InputForm
                icon='user'
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <InputForm
                icon='lock'
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            /></AuthForm>
            </>
    )
}


export default SigninScreen;