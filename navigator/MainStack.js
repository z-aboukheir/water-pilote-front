import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen
    from "../screens/HomeScreen";
import WateringSettingsScreen
    from "../screens/WateringSettingsScreen";
import ValvesSettingsScreen
    from "../screens/ValvesSettingsScreen";
import StatsScreen
    from "../screens/StatsScreen";
import MainTab
    from "./MainTab";


const Stack = createStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="MainTab" component={MainTab} />
        </Stack.Navigator>
    );
}

export default MainStack;