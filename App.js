import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Navigation from './navigator/Navigation'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SignupScreen from './screens/SignupScreen';

import SigninScreen from './screens/SigninScreen';
import ErrorScreen from './screens/ErrorScreen';
import { useFonts } from 'expo-font';
import { AppLoading } from "expo-app-loading";
import LocationPicker from './components/LocationPicker';

export default function App() {

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
  
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
     <ScrollView >
    {/* <NavigationContainer theme={customTheme}>
      <Navigation />
     </NavigationContainer> */}
    <SignupScreen/>
    </ScrollView>
     </View>
  );
}