import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import AuthForm from '../components/AuthForm';


const ResetPasswordSreen = ({route, navigation}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const { token } = route.params;

    const handleResetPassword = () => {
        // Handle sign up logic here
    };


    return (
        <AuthForm textAuth="Sign In" welcomeText="Réinitialisation du mot de passe" handleSubmit={handleResetPassword} textBouton="Réinitialiser">
            <InputForm
                icon='lock'
                placeholder="Nouveau mot de passe"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <InputForm
                icon='lock'
                placeholder="Confirmer le nouveau mot de passe"
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry
            />
           </AuthForm>
    )
}


export default ResetPasswordSreen;
