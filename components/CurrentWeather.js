import React, {
  useEffect,
  useState
} from 'react'
import {
  View,
  Text,
  Image,
    StyleSheet
} from "react-native";
import Constants from 'expo-constants';
import { API_KEY } from "@env";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";



const CurrentWeather = () => {

  const [currentWeather, setCurrentWeather] = useState({});
  const [location, setLocation] = useState({
    latitude: '45.750000',
    longitude: '4.850000'
  });


   const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`;
    const getCurrentWeather = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    data && setCurrentWeather(data);
  }

  useEffect(() => {
    getCurrentWeather();
    // console.log(currentWeather);
  }, []);

  return (
    <>
        {currentWeather.main && currentWeather.weather[0] && (
            <View style={styles.currentWeather}>
                    <Image
                        source={{uri: `https://openweathermap.org/img/wn/${currentWeather.weather && currentWeather.weather[0].icon}@4x.png`}}
                        style={styles.icon}
                    />
                    <Text style={styles.city}>{currentWeather.name}</Text>
                    <Text style={styles.temp}>{currentWeather.main.temp}°C</Text>
            </View>
        )}
    </>
  )
}

export default CurrentWeather

const styles = StyleSheet.create({
    currentWeather: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        borderRadius: 25,
        paddingBottom: 40,
        marginBottom: 60,
    },
    icon: {
        width: 300,
        height: 300
    },
    city: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontFamily: FontFamily.poppinsMedium,

    },
    temp: {
        fontSize: 30,
        fontFamily: FontFamily.poppinsMedium,

    },
})