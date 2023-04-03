import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import AuthForm from '../components/AuthForm';


const SigninScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSignIn = () => {
        // Handle sign up logic here
    };


    return (
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
