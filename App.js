import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AppLoading } from "expo-app-loading";
import {
  createStackNavigator
} from "@react-navigation/stack";
import AuthStack
  from "./navigator/AuthStack";
import MainStack
  from "./navigator/MainStack";
import {LinearGradient} from "expo-linear-gradient";

import { AuthProvider, AuthContext } from './context/AuthContext';
import {
  LogBox
} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



export default function App() {

  const Stack = createStackNavigator();

  const [fontsLoaded, error] = useFonts({
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Rubik_medium: require("./assets/fonts/Rubik_medium.ttf"),
    Raleway_medium: require("./assets/fonts/Raleway_medium.ttf"),
  });

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'linear-gradient(158.53deg, #EEF0F5 14.11%, #E2E4EA 85.89%)',
    },
    text: {
      ...DefaultTheme.text,
      fontFamily: 'custom-font',
    },
  };

  // if (!fontsLoaded) {
  //   return <Text>Loading...</Text>;
  // }

  const MainApp = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <MainStack /> : <AuthStack />;
  };

  return (
    <AuthProvider>
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  </AuthProvider>
  );
}