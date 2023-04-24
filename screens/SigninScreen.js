import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import AuthForm from '../components/AuthForm';
import { loginUser, isLoggedIn} from '../services/authService';

const SigninScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            await loginUser({ email, password });
            const isConnected = isLoggedIn()
            if (isConnected) {
                // L'utilisateur est connecté, effectuer les actions nécessaires
                // ...
            } else {
                // L'utilisateur n'est pas connecté, gérer l'erreur
                setError('Failed to log in');
            }
          } catch (error) {
            setError(error.message);
          }
    };


    return (
        // {error && <Text>{error}</Text>}
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
    )
}


export default SigninScreen;