import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useEffect, useState, useContext } from 'react';


import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AppLoading } from "expo-app-loading";
import * as Font from 'expo-font';

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

  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Rubik_medium: require("./assets/fonts/Rubik_medium.ttf"),
    Raleway_medium: require("./assets/fonts/Raleway_medium.ttf"),
  });
  setFontsLoaded(true);
}


  const MainApp = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <MainStack /> : <AuthStack />;
  };



useEffect(() => {
  loadFonts();
}, [fontsLoaded]);

    if (!fontsLoaded) {
    return <Text style = {{alignSelf: "center", marginTop:200}}>Loading...</Text>;
}

  return (
    <AuthProvider>
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  </AuthProvider>
  );
}