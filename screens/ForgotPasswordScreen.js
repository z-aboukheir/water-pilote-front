import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import AuthForm from '../components/AuthForm';


const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const handleSendEmail = () => {
        // Handle sign up logic here
    };


    return (
        <AuthForm textAuth="Sign In" welcomeText="Entrez votre adresse e-mail" handleSubmit={handleSendEmail} textBouton="Envoyer">
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
