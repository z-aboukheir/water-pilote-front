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
  
  const [fontLoaded] = useFonts({
    'custom-font': require('./assets/fonts/Poppins-Regular.ttf'),
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
  
  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    // <View style = {{justifyContent: 'center', alignContent:'center', alignItems:'center', flex: 1}}>
    <ScrollView >
    {/* <NavigationContainer theme={customTheme}>
      <Navigation />
     </NavigationContainer> */}
    <SignupScreen/>
    </ScrollView>
    // </View>
  );
}
