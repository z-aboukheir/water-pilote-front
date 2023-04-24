import React, {useEffect} from 'react';
import { NavigationContainer, useNavigation, CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import SchedulesSettingScreen from '../screens/SchedulesSettingScreen';
import SettingsScreen from '../screens/SettingsScreen';
import statisticsScreen from '../screens/statisticsScreen';
import WateringSettingScreen from '../screens/WateringSettingScreen';
import HomeScreen from '../screens/HomeScreen';


const Navigation = () => {}