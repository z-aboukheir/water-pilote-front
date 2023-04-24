import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SigninScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignupScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
